import { Component, OnInit } from '@angular/core';
import {IBook} from '../../model/IBook';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: IBook;
  id: any;
  constructor(private bookService: BookService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.bookService.getBookById(this.id).subscribe((result) => {
        this.book = result;
      });
    });
  }

}
