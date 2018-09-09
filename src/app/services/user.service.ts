import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser} from '../interfaces/iuser.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:IUser=null;


  public baseUrl: string = "https://sachin-ware-sb-rest-server.herokuapp.com";
  //public baseUrl: string = "http://localhost:8082";
  constructor(private _http:HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.baseUrl+'/users');
  }

  deleteUser(userId:Number){
    return this._http.delete(this.baseUrl+'/user/'+userId).pipe(
      map(res=>res))
  }



  getUser(){
    return this.user;
  }
  setUser(user)
  {
    this.user=user;
  }

}
