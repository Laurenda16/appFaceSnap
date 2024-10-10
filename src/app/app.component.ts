import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  mySnap!:FaceSnap;
  mySnap1!:FaceSnap;
  mySnap2!:FaceSnap;

  ngOnInit(): void {
      this.mySnap = new FaceSnap(
      'Archibald',
      'MOn meilleur amie depuis toujours',
      'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      new Date(),
      10

     );
     this.mySnap1 = new FaceSnap(
      'Laurenda un bon repas',
      'MOn meilleur amie depuis toujours',
      'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      new Date(),
      5

     );
     this.mySnap2 = new FaceSnap(
      'koukouvi trhee montain',
      'MOn meilleur amie depuis toujours',
      'https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg',
      new Date(),
      1

     );

     this.mySnap1.setLocation("25 rue de ma marne");
  }
 
}
