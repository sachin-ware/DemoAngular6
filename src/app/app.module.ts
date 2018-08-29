import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Route} from '@angular/router';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import {CommonServiceService} from './services/common-service.service';
import { Component3Component } from './component3/component3.component';
import { FileUploadComponent } from './file-upload/file-upload.component'
import { FileSelectDirective } from 'ng2-file-upload';
import {HttpClientModule} from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {SuiModule} from 'ng2-semantic-ui';
const appRoutes: Route[] = 
  [
    {
      path:"c1",
      component:Component1Component
    },
    {
      path:"c2",
      component:Component2Component
    },
    {
      path:"c3",
      component:Component3Component
    },
    {
      path:"upload",
      component:FileUploadComponent
    },
    {
      path:"reg",
      component:UserRegistrationComponent
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    FileUploadComponent,
    FileSelectDirective,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } ),
      SuiModule
  ],
 
  providers: [CommonServiceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
