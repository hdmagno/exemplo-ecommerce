import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-type': 'application/json'}
  )
}

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  endPoint = `${baseUrl}/books`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.endPoint)
  }
}
