import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 [my-tooltip]="'abc' + 'def'">My First Angular 2 App</h1>`,
})
export class AppComponent { }
