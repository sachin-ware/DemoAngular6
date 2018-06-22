import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../services/common-service.service';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  sharedVariable:String="defaultValue";
  //commonServiceService:CommonServiceService;
  constructor( private commonServiceService:CommonServiceService,
  private router:Router) { }

  ngOnInit() {
    console.log("Component2Component ngOnInit");
  }
  readFromCommonService(){
      this.sharedVariable=this.commonServiceService.sharedVariable;
  }

  back(){
    this.router.navigate(['c1']);
  }

  ngOnDestroy(){
    console.log("Component 2 distroyed");
  }
}
