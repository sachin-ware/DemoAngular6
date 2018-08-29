import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  avatarUrl:string='./../assets/images/avatar2.png';
  selectedFile: File; 

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
   this.http.post('http://localhost:8082/uploadPic', uploadData,{responseType: 'text'} ).subscribe(event => {
       console.log('Event:',event); // handle event here
       this.avatarUrl=event;
     });
 }
}
