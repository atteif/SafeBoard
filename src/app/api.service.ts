import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Don} from './model/Don';
import {Needs} from './model/Needs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private _need: Needs = new Needs();
  constructor(private http: HttpClient) { }

  getSelectedNeed(): Needs {
    const temp = this._need;
    this.clearData();
    return temp;
  }

  clearData(){
    this._need = undefined;
  }

  setSelectedNeed(need) {
    this._need = need;
  }

  public getNews(): Observable< HttpResponse<Don[]>> {
      return this.http.get<Don[]>(
          `http://localhost/SafeDevPI/web/app_dev.php/getAllDon`, { observe: 'response' });
  }
  public getNeeds(): Observable< HttpResponse<Needs[]>> {
    return this.http.get<Needs[]>(
        `http://localhost/SafeDevPI/web/app_dev.php/getAllNeeds`, { observe: 'response' });
  }

  addDon(don: Don): Observable<Don> {
    return this.http.post<Don>('http://localhost/SafeDevPI/web/app_dev.php/addDon/' + don.idNeeds, don);
  }

}

