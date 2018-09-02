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
    fname: '',
    lname: '',
    email: '',
    dob: '2018-05-01',//backend needs YYYY-MM-DD format to save user.
    userName: '',
    password: 'password',
    proPicUrl:"https://TestURL"
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
   //this.http.post('http://localhost:8082/uploadProfilePic/'+this.user.userId, uploadData,{responseType: 'text'} ).subscribe(event => {
    this.http.post('https://sachin-ware-sb-rest-server.herokuapp.com/uploadProfilePic/'+this.user.userId, uploadData,{responseType: 'text'} ).subscribe(event => {
    
       console.log('Event:',event); // handle event here
       this.avatarUrl=event;//.replace('File uploaded successfully:','');
     });
 }

 saveClicked(){
  console.log('saving User:',JSON.stringify(this.user));

  this.http.post('https://sachin-ware-sb-rest-server.herokuapp.com/user', this.user).subscribe(res=>{
 //   this.http.post('http://localhost:8082/user', this.user).subscribe(res=>{
      
      console.log('Saved User:',JSON.stringify(res));
   // {"userId":33,"userName":"sachin","password":"password","email":"sachin.ware@cognizant.com","fname":"sachin","lname":"ware","dob":1525132800000,"createdDate":1535865316208,"modifiedDate":1535865316208,"lastAccessed":null,"proPicUrl":"https://TestURL"}
    let tmpuser : any =res;
    this.user=tmpuser;

  });
  
 }


}
