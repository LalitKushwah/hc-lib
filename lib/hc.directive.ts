import { Directive,ElementRef,AfterViewInit } from '@angular/core';
import { HcService } from './hc.service';

@Directive({ selector: '[hclib]' })
export class HcDirective implements AfterViewInit{
    constructor(private el:ElementRef,private hc:HcService) {
    }

    ngAfterViewInit(){
       console.log('View Init');
    }
}