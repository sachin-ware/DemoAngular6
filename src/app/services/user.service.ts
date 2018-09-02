import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser} from '../interfaces/iuser.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "https://sachin-ware-sb-rest-server.herokuapp.com";

  constructor(private _http:HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.baseUrl+'/users');
  }

  deleteUser(userId:Number){
    return this._http.delete(this.baseUrl+'/user/'+userId).pipe(
      map(res=>res))
  }
}
