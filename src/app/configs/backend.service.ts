import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contentHeaders } from './headers';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BackendService {
  url: string;
  public identity;
  public token;
  public authenticationHeaders;
  constructor(private _http: HttpClient) { }

  post(path, params, extraParams?): Observable<any> {
    this.url = (!extraParams ? `${environment.serverUrl}${path}` : `${environment.serverUrl}${path}?${extraParams}`);
    return this._http.post(this.url, params)
  }

  get(path, params?): Observable<any> {
    this.url = `${environment.serverUrl}${path}`;
    return this._http.get(this.url)
  }

  delete(path, id): Observable<any> {
    this.url = `${environment.serverUrl}${path}/${id}`;
    return this._http
      .delete(this.url);
  }


  public update<T>(path: string, _id: string, entity: T): Observable<any> {
    this.url = `${environment.serverUrl}${path}/${_id}`
    return this._http.put<T[]>(this.url, entity, {});
  }

  handleError(error: any) {
    console.error('An error occurred', error);
    var httpErrorResponse = <any>error;
    return httpErrorResponse;
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    (identity != 'undefined') ? this.identity = identity : this.identity = null;
    return this.identity;
  }

  //SERVICIOS QUE NECESITAN TOKEN DE AUTENTICACION

  getAuth(path): Observable<any> {
    this.url = `${environment.serverUrl}${path}`;
    const options = { headers: this.authenticationHeaders };
    return this._http.get(this.url, options)
  }


  /*get(path, params): Promise<any> {
    const options = { headers: contentHeaders, withCredentials: true, params: params };
    return this.http
      .get(`${environment.serverUrl}${path}`, options)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }*/

  /*
    post(path, params, extraParams?): Promise<any> {
      this.url = (!extraParams ? `${environment.serverUrl}${path}` : `${environment.serverUrl}${path}?${extraParams}`);
      return this.http
        .post(this.url, params, { headers: contentHeaders, withCredentials: true })
        .toPromise()
        .then(response => {
          return response;
        })
        .catch(this.handleError);
    }
    patch(path, params, extraParams?): Promise<any> {
      this.url = (!extraParams ? `${environment.serverUrl}${path}` : `${environment.serverUrl}${path}?${extraParams}`);
      return this.http
        .patch(this.url, params, { headers: contentHeaders, withCredentials: true })
        .toPromise()
        .then(response => {
          return response;
        })
        .catch(this.handleError);
    }
  
    put(path, params, extraParams?): Promise<any> {
      this.url = (!extraParams ? `${environment.serverUrl}${path}` : `${environment.serverUrl}${path}?${extraParams}`);
      return this.http
        .put(this.url, params, { headers: contentHeaders, withCredentials: true })
        .toPromise()
        .then(response => {
          return response;
        })
        .catch(this.handleError);
    }
    */





}
