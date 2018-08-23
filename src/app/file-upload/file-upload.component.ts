import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';


const URL = 'http://localhost:8082/uploadPic';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  imgUrl:String=null;


  selectedFile: File;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }


  

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }



  onUpload() {
    this.uploadToCloud().subscribe(event => {
      console.log(event);
      // if (event instanceof HttpResponse) {
      //    console.log('File is completely uploaded!');
      //  }
     });
    
    

  }

  uploadToCloud(){
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    return this.http.post(URL, uploadData);

  }
 
}
