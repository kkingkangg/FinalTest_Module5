import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';
import {IBook} from '../../model/IBook';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  createForm: FormGroup;
  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }
  createBook(): void{
    const book: IBook = this.createForm.value;
    this.bookService.create(book).subscribe(() => {
      alert('Create successessfully!');
      this.router.navigate(['']);
    });
  }

}
