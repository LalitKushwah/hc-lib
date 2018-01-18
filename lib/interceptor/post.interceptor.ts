/**
 * Created by ps11 on 15/01/18.
 */

import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class PostInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var postReq = null;
    if(localStorage.getItem('token')!= null) {
      postReq = req.clone({
        headers: req.headers.set('Authorization', localStorage.getItem('token')).append('Content-Type', 'application/x-www-form-urlencoded')
      });
    }
    else{
      postReq = req.clone();
    }
    return next.handle(postReq).do(event => {
      if (event instanceof HttpResponse) {
        const time = new Date().toLocaleString();
        console.log(`Request happened at ${time}.`);
      }
    })
  }
}
