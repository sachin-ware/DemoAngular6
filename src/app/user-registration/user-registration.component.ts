import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from './../interfaces/iuser.interface'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  avatarUrl:string='./../assets/images/avatar2.png';
  selectedFile: File; 

  user:IUser={
    fname: 'sachin',
    lname: 'ware',
    email: 'sachin.ware@cognizant.com',
    dob: '2018-05-01',//backend needs YYYY-MM-DD format to save user.
    userName: 'sachin',
    password: 'password'
  }

  constructor(private http:HttpClient) {

   }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    this.uploadToCloud();
 }

 uploadToCloud(){
   const uploadData = new FormData();
   uploadData.append('file', this.selectedFile,);
  // this.http.post('http://localhost:8082/uploadPic', uploadData,{responseType: 'text'} ).subscribe(event => {
    this.http.post('https://sachin-ware-sb-rest-server.herokuapp.com/uploadPic', uploadData,{responseType: 'text'} ).subscribe(event => {
    
       console.log('Event:',event); // handle event here
       this.avatarUrl=event;//.replace('File uploaded successfully:','');
     });
 }

 saveClicked(){
  console.log('saving User:',JSON.stringify(this.user));

  this.http.post('https://sachin-ware-sb-rest-server.herokuapp.com/user', this.user).subscribe(res=>{

      console.log('Saved User:',JSON.stringify(res));
  });
  
 }


}
