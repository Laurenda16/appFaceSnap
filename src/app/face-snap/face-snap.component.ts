import { Component, Input, input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!: FaceSnap;
  title!:string;
  description!:string;
  createdAt!:Date;
  snaps!:number;
  imageUrl!:string;
  snapButtonText!:string;
  userHasSnapped!:boolean;


ngOnInit(): void {
   this.title ='Archinald et des copains';
   this.description="ma premiere snaps";
   this.createdAt= new Date();
   this.snaps = 2;
   this.imageUrl="https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg"
   this.snapButtonText = "oh snap";
   this.userHasSnapped = false;
  }
  

   OnSnap():void
   {
    if(this.userHasSnapped)
    {
     this.unSnap();
      
    }
    else{
   this.snap();
    }
   
   }
unSnap():void
{
  this.snaps --;
  this.snapButtonText="Oh snap!"
  this.userHasSnapped= false;


}

snap():void{
     this.snaps ++;
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped= true;

}
   

}
