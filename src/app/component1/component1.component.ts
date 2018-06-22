import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../services/common-service.service';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  comp1Var;
  //commonServiceService:CommonServiceService;
  constructor( private commonServiceService:CommonServiceService,
    private router:Router) { }

  ngOnInit() {
    console.log("Component1Component ngOnInit");
  }

  writeToCommonService(){
    this.commonServiceService.sharedVariable=this.comp1Var;
    
  }

  next(){
    this.router.navigate(['c2']);
  }

  ngOnDestroy(){
    console.log("Component1Component distroyed");
  }
}
