import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Association} from '../model/Association';

import {Reclamation} from '../model/Reclamation';



@Injectable({
  providedIn: 'root'
})
export class AssociationService {
    private _asso: Association = new Association();
  constructor(public http: HttpClient) { }
    getSelectedAssociation(): Association {
        const temp = this._asso;
        this.clearData();
        return temp;
    }

    clearData() {
        this._asso = undefined;
    }

    setSelectedAssociation(asso) {
        this._asso = asso;
    }


  getAllAssociations(): Observable<HttpResponse<Association[]>> {
    return  this.http.get<Association[]>('http://localhost:8080/SafeDevPI/web/app_dev.php/getAllAssociation', {observe: 'response'});
  }

  addAssociation(asso: Association): Observable<any> {
        const headers =
            new Headers({'Content-Type':
                    'application/json'});
        return this.http.post<Association>('http://localhost:8080/SafeDevPI/web/app_dev.php/addAssociation' , asso);
    }
    addReclamation(rec: Reclamation, id: any): Observable<any> {
        return this.http.post<Reclamation>('http://localhost:8080/SafeDevPI/web/app_dev.php/addReclamation/' + id, rec);
    }
    getNombreReclamation(id: any): Observable<any> {
      return this.http.get('http://localhost:8080/SafeDevPI/web/app_dev.php/getNombreReclamation/' + id );

    }
    isReclaimed(id: any): Observable<any> {
        return this.http.get('http://localhost:8080/SafeDevPI/web/app_dev.php/isReclaimed/' + id );

    }
    deleteAssociation(id: any): Observable<any> {
     return  this.http.delete('http://localhost:8080/SafeDevPI/web/app_dev.php/deleteAssociation/' + id);
    }
  }



