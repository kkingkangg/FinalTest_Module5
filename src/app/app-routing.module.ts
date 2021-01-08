import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './components/book-list/book-list.component';
import {CreateBookComponent} from './components/create-book/create-book.component';
import {UpdateBookComponent} from './components/update-book/update-book.component';
import {DetailComponent} from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'createBook',
    component: CreateBookComponent
  },
  {
    path: 'updateBook/:id',
    component: UpdateBookComponent
  },
  {
    path: 'detailBook/:id',
    component: DetailComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
