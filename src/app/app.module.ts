import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FroalaComponent } from './froala/froala.component';
import { FroalaSaveButtonComponent } from './froala-save-button/froala-save-button.component';
import { SaveButtonService } from "../assets/service/save-button.service";
import { Froala1Component } from './froala1/froala1.component';

@NgModule({
  declarations: [
    AppComponent,
    FroalaComponent,
    FroalaSaveButtonComponent,
    Froala1Component
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    HttpClientModule
  ],
  providers: [SaveButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
