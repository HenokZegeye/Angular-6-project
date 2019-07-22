import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../shared/blog.model';
import { Comment } from '../shared/comment.model';
import { Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    
  }

  getBlogs(): Observable<Blog>{
    return this.http.get<Blog>(this.apiUrl+'/blogs.json', this.httpOptions).pipe(
      retry(1),
      catchError(err => {
        console.log(err.message);
        console.log("Error is handled");
        return throwError("Error thrown from catchError");
      })
    )
  }
  getBlog(id): Observable<Blog>{
    return this.http.get<Blog>(this.apiUrl+'/blogs/'+id+'.json',this.httpOptions).pipe(
      retry(1),
      catchError(err => {
        console.log(err.message);
        console.log("Error is handled");
        return throwError("Error thrown from catchError");
      })
    )
  }
  createBlog(blog): Observable<Blog>{
    return this.http.post<Blog>(this.apiUrl+'/blogs.json', JSON.stringify(blog), this.httpOptions).pipe(
      retry(1),
      catchError(err => {
        console.log(err.message);
        console.log("Error is handled");
        return throwError("Error thrown from catchError");
      })
    )
  }
  updateBlog(id, blog): Observable<Blog> {
    return this.http.put<Blog>(this.apiUrl+'/blogs/'+id+'.json', JSON.stringify(blog), this.httpOptions).pipe(
      retry(1),
      catchError(err => {
        console.log(err.message);
        console.log("Error is handled");
        return throwError("Error thrown from catchError");
      })
    )
  }
  deleteBlog(id){
    return this.http.delete<Blog>(this.apiUrl + '/blogs/'+id+'.json', this.httpOptions).pipe(
      retry(1),
      catchError(err => {
        console.log(err.message);
        console.log("Error is handled");
        return throwError("Error thrown from catchError");
      })
    )
  }
  getComments(blog_id): Observable<Comment>{
    return this.http.get<Comment>(this.apiUrl+'/blogs/'+blog_id+'/comments', this.httpOptions).pipe(
      retry(1),
      catchError(err => {
        console.log(err.message);
        console.log("Error is handled");
        return throwError("Error thrown from catchError");
      })
    )
  }
  createComment(comment,blog_id): Observable<Comment>{
    console.log(comment);
    return this.http.post<Comment>(this.apiUrl+'/blogs/'+blog_id+'/comments', JSON.stringify(comment), this.httpOptions).pipe(
      retry(1),
      catchError(err => {
        console.log(err.message);
        console.log("Error is handled");
        return throwError("Error thrown from catchError");
      })
    )
  }
}
