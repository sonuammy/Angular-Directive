import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { StructuralComponent } from './structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

