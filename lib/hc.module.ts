import { NgModule, } from '@angular/core';
import { HcDirective } from './hc.directive';
import { HcService } from './hc.service';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import {PostInterceptor} from "./interceptor/post.interceptor";
@NgModule({
    imports: [HttpClientModule],
    exports: [HcDirective],
    declarations: [HcDirective],
    providers: [HcService,{
        provide: HTTP_INTERCEPTORS,
        useClass: PostInterceptor,
        multi: true
    }],
})
export class HcModule { }