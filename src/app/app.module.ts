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
import {SuiModule,SuiDropdownModule} from 'ng2-semantic-ui';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../app/services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
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
    },
    {
      path:"user-list",
      component:UserListComponent
    },
    {
      path:"",
      component:HomeComponent
    },
    {
      path:"home",
      component:HomeComponent
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
    UserRegistrationComponent,
    UserListComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } ),
    SuiModule,
    NgbModule,
    SuiDropdownModule
    
  ],
 
  providers: [CommonServiceService, UserService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
