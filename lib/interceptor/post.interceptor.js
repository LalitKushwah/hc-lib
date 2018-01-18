"use strict";
/**
 * Created by ps11 on 15/01/18.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var PostInterceptor = (function () {
    function PostInterceptor() {
    }
    PostInterceptor.prototype.intercept = function (req, next) {
        var postReq = null;
        if (localStorage.getItem('token') != null) {
            postReq = req.clone({
                headers: req.headers.set('Authorization', localStorage.getItem('token')).append('Content-Type', 'application/x-www-form-urlencoded')
            });
        }
        else {
            postReq = req.clone();
        }
        return next.handle(postReq).do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                var time = new Date().toLocaleString();
                console.log("Request happened at " + time + ".");
            }
        });
    };
    return PostInterceptor;
}());
PostInterceptor = __decorate([
    core_1.Injectable()
], PostInterceptor);
exports.PostInterceptor = PostInterceptor;
