import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  per=0.85;
  names=[
    "Braulio",
    "Abigail",
    "Dayne",
    "Albert"
  ];
  persons=[
    {name:"Braulio",age:10},
    {name:"Abigail",age:20},
    {name:"Dayne",age:30},
    {name:"Albert",age:40},
  ];
}
