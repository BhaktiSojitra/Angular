import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  //Interpolation
  text="hello world"; 
  name = "sojitra bhakti";

  salary = 123.456789;
  person = {"name":"bhakti","enrollment":1650};
  date = new Date();

  //property binding
  imgpath = "https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg";

  //event binding
  click(){
    this.name = "bhakti";
  }
}
