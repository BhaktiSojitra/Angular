import { Component } from '@angular/core';
import { Person } from './person';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  /*persons=[
    {name:"Braulio",age:10},
    {name:"Abigail",age:20},
    {name:"Dayne",age:30},
    {name:"Albert",age:40},
  ];*/

  myForm = new FormGroup({
    name:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required)
  });

  persons:Person[]=[];
  IdToEdit=-1;

  insert(){
    if(this.IdToEdit==-1){
      console.log("form value:- ",this.myForm.value);
      var insert = this.persons.push(<Person>this.myForm.value);
      console.log("before re-setvalue",this.myForm.value);
      /*this.myForm.controls.name.setValue("");
      this.myForm.controls.age.setValue("");
      console.log("insert=",insert);
      console.log("after re-setvalue",this.myForm.value);*/
    }
    else{
      this.persons[this.IdToEdit]=<Person>this.myForm.value;
    }
    this.myForm.controls.name.setValue("");
    this.myForm.controls.age.setValue("");
    this.IdToEdit=-1;
  }

  edit(i:any){
    this.IdToEdit=i;
    var setvalueresult = this.myForm.controls.name.setValue(this.persons[i].name);
    this.myForm.controls.age.setValue(this.persons[i].age);
    console.log("setvalueresult:- ",setvalueresult);
    var result = this.persons[i];
    console.log("edit result:- ",result);
  }

  delete(i:any){
   var result = this.persons.splice(i,1);
   console.log("result of delete is:- ",result);
  }
}

/*
persons:Person[]=[];
So, with this line of code, you're declaring an empty array called persons 
which is intended to hold objects that match the structure defined by the 
Person class.
*/