import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StackFormComponent } from './stack-form/stack-form.component';
import { StackItemComponent } from './stack-item/stack-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StackFormComponent,
    StackItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
