/* 
Created by Nui Rattapon
Use this pipe when you using [innerHtml]

This will bypass DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) 
by sanitizing values to be safe to use in the different DOM contexts.

and give back inline css style back to elements
 */

import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}