import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Lostandfound } from '../models/lostandfound.model';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LostandfoundService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }


  createAndStorePost(label: string, image: string, date: Date ) {
    const lostandfoundData: Lostandfound = { label: label , image: image , date: date};
    const headers = { 'content-type': 'json'};
    this.http
      .post<any>(
        'http://127.0.0.1:8000/lostandfound/new',
        lostandfoundData
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }



  fetchPosts() {
    let searchParams = new HttpParams();
    // searchParams = searchParams.append('print', 'pretty');
    // searchParams = searchParams.append('custom', 'key');
    return this.http
      .get('http://127.0.0.1:8000/lostandfound/'      
      )
      .pipe(
        map(responseData => {
          const postsArray: Lostandfound[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }
}
