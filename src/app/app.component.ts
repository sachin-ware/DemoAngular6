import { Component } from '@angular/core';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  times=0;
  name:String="default";
  
  constructor(private router:Router){

  }
  onInit(){
    console.log("AppComponent onInit");
  }

  next()
  {
      this.router.navigate(['c1']);
  }
  ngOnDestroy(){
    console.log("AppComponent distroyed");
  }
}
