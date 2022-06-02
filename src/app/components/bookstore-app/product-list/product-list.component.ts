import { BooksService } from './../../../core/services/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  loadAll() {
    this.bookService.getAll()
      .subscribe(res => {
        this.books = res
      });
  }

}
