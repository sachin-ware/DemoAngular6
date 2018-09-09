import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users = [];
  constructor(private _userService:UserService, private _router: Router) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(Data => this.users = Data);
  }

  deleteUser(user){
    this._userService.deleteUser(user.userId).subscribe((data)=>{
        this.users.splice(this.users.indexOf(user),1);
    });
  }

  newUser(){   
    this._router.navigate(['/reg']);
  }

  editUser(usr){
    this._userService.setUser(usr);
    this._router.navigate(['/reg']);
  }

}
