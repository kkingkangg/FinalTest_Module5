import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../model/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_URL = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<any>{
    return this.http.get(this.API_URL);
  }
  getBookById(id): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  create(book: IBook): Observable<any> {
    return this.http.post<IBook>(this.API_URL, book);
  }
  update(book: IBook): Observable<any> {
    return this.http.put<IBook>(`${this.API_URL}/${book.id}`, book);
  }
  delete(id: number): Observable<any>{
    return this.http.delete((`${this.API_URL}/${id}`));
  }
}
