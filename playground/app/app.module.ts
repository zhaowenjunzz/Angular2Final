import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MyTooltipModule } from './tooltip/tooltip.module';

@NgModule({
  imports: [ BrowserModule, MyTooltipModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
