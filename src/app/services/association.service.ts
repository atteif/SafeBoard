import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {catchError, map, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Association} from '../Entity/Association';
import {RequestOptions} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(public http: HttpClient) { }
  getAllAssociations(): Observable<HttpResponse<Association[]>> {
    return  this.http.get<Association[]>('http://localhost:8080/SafeDevPI/web/app_dev.php/getAllAssociation', {observe: 'response'});
  }
    addAssociation(asso: Association): Observable<any> {
        const headers =
            new Headers({'Content-Type':
                    'application/json'});
        return this.http.post('http://localhost:8080/SafeDevPI/web/app_dev.php/addAssociation', asso)
            .pipe(map((data: any) => {
            return data;
        }));
    }
  }
// tslint:disable-next-line:no-unused-expression

