import { Injectable } from '@angular/core';
import {Refugee} from '../models/Refugee';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {Benevole} from '../models/Benevole';

@Injectable({
  providedIn: 'root'
})
export class RefugeeService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }


  public getRef(): Observable<HttpResponse<Refugee[]>> {
    return this.http.get<Refugee[]>(
        `http://localhost/SafeDev/web/app_dev.php/affiche`, {observe: 'response'});
  }
    public getBenALL(): Observable<HttpResponse<Benevole[]>> {
        return this.http.get<Benevole[]>(
            `http://localhost/SafeDev/web/app_dev.php/getAllBen`, {observe: 'response'});
    }

    addRefugee(ref: Refugee): Observable<Refugee> {
        return this.http.post<Refugee>('http://localhost/SafeDev/web/app_dev.php/add/' + ref.benevole_id, ref);
    }
    updateRef(ref: Refugee) : Observable<Refugee>{
        return this.http.post<Refugee>('http://localhost/SafeDev/web/app_dev.php/update/' + ref.id , ref);
    }
    public getBen(loc): Observable<HttpResponse<Benevole[]>> {
        return this.http.get<Benevole[]>(
            `http://localhost/SafeDev/web/app_dev.php/getBenLoc/`+loc+'/'+10, {observe: 'response'})
    }
    public getSum(): Observable<HttpResponse<any[]>> {
        return this.http.get<any[]>(
            `http://localhost/SafeDev/web/app_dev.php/sumByNeeds`, {observe: 'response'})
    }
    updateBen(ben: Benevole) : Observable<Benevole>{
        return this.http.post<Benevole>('http://localhost/SafeDev/web/app_dev.php/updateBenevole/' + ben.id , ben);
    }

    public getCountRef(): Observable<HttpResponse<any[]>> {
        return this.http.get<any[]>(
            `http://localhost/SafeDev/web/app_dev.php/getCountRef`, {observe: 'response'})
    }
    public getCountBen(): Observable<HttpResponse<any[]>> {
        return this.http.get<any[]>(
            `http://localhost/SafeDev/web/app_dev.php/getcountBen`, {observe: 'response'})
    }
}
