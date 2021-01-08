import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/IBook';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  listBooks: IBook[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks(): IBook[]{
    this.bookService.getAllBooks().subscribe((data: any) => {
      this.listBooks = data;
      console.log(this.listBooks);
    });
    return this.listBooks;
  }
  deleteBook(id: number): void{
    if (confirm('Are you sure?')){
      this.bookService.delete(id).subscribe((result) => {
        console.log('Delete: ' + result);
        this.getAllBooks();
      });
    }
  }
}
