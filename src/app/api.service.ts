import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Don} from './model/Don';
import {Needs} from './model/Needs';
import {catchError} from 'rxjs/operators';
import {Sum} from './model/Sum';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  headers;

    private _need: Needs = new Needs();
   spresp: any[];
  nbr: Sum[] = [];

    constructor(private http: HttpClient) {
    }

    getSelectedNeed(): Needs {
        const temp = this._need;
        this.clearData();
        return temp;
    }

    clearData() {
        this._need = undefined;
    }

    setSelectedNeed(need) {
        this._need = need;
    }

    public getDons(): Observable<HttpResponse<Don[]>> {
        return this.http.get<Don[]>(
            `http://localhost/SafeDevPI/web/app_dev.php/getAllDon`, {observe: 'response'});
    }

    public getNeeds(): Observable<HttpResponse<Needs[]>> {
        return this.http.get<Needs[]>(
            `http://localhost/SafeDevPI/web/app_dev.php/getAllNeeds`, {observe: 'response'});
    }

    public getNeed(): Observable<HttpResponse<Needs[]>> {
        return this.http.get<Needs[]>(
            `http://localhost/SafeDevPI/web/app_dev.php/getNeedValue`, {observe: 'response'});
    }

    addDon(don: Don): Observable<Don> {
        return this.http.post<Don>('http://localhost/SafeDevPI/web/app_dev.php/addDon/' + don.idNeeds, don);
    }

    deleteNeed(needs: Needs): Observable<Needs> {
        return this.http.delete<Needs>('http://localhost/SafeDevPI/web/app_dev.php/deleteDon/' + needs.id);
    }

    public getNeedsByCategory(needs: Needs): Observable<HttpResponse<Needs[]>> {
        return this.http.get<Needs[]>(
            `http://localhost/SafeDevPI/web/app_dev.php/getNeedsValue/` + needs.category, {observe: 'response'});
    }

    public getDonValueByNeedsCategory(need: Needs) {
        return this.http.get(
            `http://localhost/SafeDevPI/web/app_dev.php/getDonValue/` + need.category + '/' + need.id);
    }

    public getDonValueByNeedsCategory1(cat, id): Observable<HttpResponse<Sum[]>> {
        return this.http.get<Sum[]>(
            `http://localhost/SafeDevPI/web/app_dev.php/getDonValue/` + cat + '/' + id, {observe: 'response'});
    }

    updateNeedStatus(id: any, needs: Needs): Observable<Needs> {
        return this.http.put<Needs>('http://localhost/SafeDevPI/web/app_dev.php/updateNeeds/' + id, needs);

    }

    updateNeedsObject(needs: Needs[]) {
        needs.forEach(need => {
            this.getDonValueByNeedsCategory1(need.category, need.id)
                .subscribe(resp => {
                    const keys = resp.headers.keys();
                    this.headers = keys.map(key =>
                        `${key}: ${resp.headers.get(key)}`);

                    for (const data of resp.body) {
                        this.nbr.push(data);
                        console.log(data);
                        console.log(need);
                        this.nbr.forEach(e => {
                            if (e.nb > need.value) {
                                const i = this.nbr.indexOf(e);
                                this.nbr.splice(i, 1);
                                console.log(need);
                                this.deleteNeedsFromList(need);
                            }
                            const i = this.nbr.indexOf(e);
                            this.nbr.splice(i, 1);
                        });
                    }
                });
        });
    }

  deleteNeedsFromList(need: Needs) {
    need.is_done = true;
    console.log(need);
    this
        .updateNeedStatus(need.id, need)
        .subscribe(resp => {
          return this.spresp.push(resp);
        });
  }

}

