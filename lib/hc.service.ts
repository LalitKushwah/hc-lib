import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class HcService {

    private baseUrlPrefix: string = 'https://';
    private baseUrlSuffix: string = '.hotwax.co/api/control';
    private loginServiceRoute = '/getAuthenticationToken';
    constructor(private http: HttpClient) {}

    doLogin(url: string, username: string, password: string): any{
    return this.http.post(this.baseUrlPrefix + url + this.baseUrlSuffix + this.loginServiceRoute,{},
        {params: new HttpParams().set('USERNAME', username).append('PASSWORD', password),
        observe: 'response'})
}

    doLogout(){
        localStorage.removeItem('token');
    }
}
