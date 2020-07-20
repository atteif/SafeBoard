import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {catchError, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';

interface Association {
  nomA: string;
  tel: string;
  email: string;
  description: string;
  ville: string;
  adresse: string;
  nomPresident: string;
  budget: number;

}
@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  private uri = 'http://localhost:8080/SafeDevPI/web/app_dev.php/association';

  // forms
  Associationform = new FormGroup({
    id: new FormControl(null),
    nomA: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    nomPresident: new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
  });
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  }


  constructor(public http: HttpClient) { }
  getAllAssociations(): Observable<any[]> {
    return  this.http.get<Association[]>(this.uri);
  }
  getAssociation(): Observable<any> {
        return this.http.get(this.uri + '/getAssociation').pipe(
        retry(1),
        catchError(this.handleError));
  }
  addAssociation(asso: Association) {
    console.log(asso);
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams();

    return this.http.post(this.uri + '/addAssociation?nomA=' + asso.nomA + '&tel=' + asso.tel + '&email=' + asso.email + '&desc=' + asso.description +
            '&ville=' + asso.ville + '&adresse=' + asso.adresse + '&nomPresident=' + asso.nomPresident + '&budget=' + asso.budget  , body, {
          headers: myheader,
        })
        .subscribe();
  }
  updateAssociation(asso: Association) {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams();
    return this.http.put(this.uri + '/association/updateAssociation?nomA=' + asso.nomA + '&tel=' + asso.tel + '&email=' + asso.email + '&desc=' + asso.description +
    '&ville=' + asso.ville + '&adresse=' + asso.adresse + '&nomPresident=' + asso.nomPresident + '&budget=' + asso.budget  , body, {
    headers: myheader,
  })
.subscribe();
  }
  deleteAssociation(id: number) {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams();
    return this.http
        .post(this.uri + '/association/deleteAssociation?id=' + id, body, {
          headers: myheader,
        })
        .subscribe();
  }
  populateFormAssociation(association) {
    this.Associationform.setValue(association);
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
// tslint:disable-next-line:no-unused-expression

