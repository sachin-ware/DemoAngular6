import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  imageArray: any[]=[];
  imagesGroups:any[]=[];
  constructor() { }

  ngOnInit() {
    this.imagesGroups=[];
    for (let index = 0; index < 5; index++) {
      this.imageArray.push({url:"https://res.cloudinary.com/rsachinwarecloudinary1/image/upload/v1558472460/SRWRestImageBase/img1.jpg.jpg"});
      this.imageArray.push({url:"https://res.cloudinary.com/rsachinwarecloudinary1/image/upload/v1534767689/SRWRestImageBase/1024_YZF.JPG.jpg"});
      this.imageArray.push({url:"https://res.cloudinary.com/rsachinwarecloudinary1/image/upload/v1534710225/SRWRestImageBase/fer35e.jpg.jpg"});
      this.imageArray.push({url:"https://res.cloudinary.com/rsachinwarecloudinary1/image/upload/v1548529590/SRWRestImageBase/WhatsApp%20Image%202019-01-21%20at%208.32.00%20AM.jpeg.jpg"});
      this.imageArray.push({url:"https://res.cloudinary.com/rsachinwarecloudinary1/image/upload/v1536520082/SRWRestImageBase/Sachin%20cover%201.jpg.jpg"});
      this.imageArray.push({url:"https://res.cloudinary.com/rsachinwarecloudinary1/image/upload/v1535566911/SRWRestImageBase/1024_S2000.jpg.jpg"});
      this.imageArray.push({url:"https://res.cloudinary.com/rsachinwarecloudinary1/image/upload/v1534712510/SRWRestImageBase/fer31a.jpg.jpg"});
      this.imagesGroups[index]=JSON.parse(JSON.stringify(this.imageArray));
    }
  }

}
