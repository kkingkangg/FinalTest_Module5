import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../../model/IBook';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  updateForm: FormGroup;
  id: any;
  book: IBook;
  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group( {
      title: [''],
      author: [''],
      description: ['']
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.bookService.getBookById(this.id).subscribe((result) => {
        this.book = result;
        this.updateForm.patchValue(this.book);
      });
    });
  }
  updateBook(): void{
    if (this.updateForm.valid) {
      const {value} = this.updateForm;
      const data = {
        ...this.book,
        ...value
      };
      this.bookService.update(data).subscribe( result => {
        alert('Update successfully!');
        this.router.navigate(['']);
      }, error => {
        console.log(error);
      });
    }
  }

}
