import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MockAPIFacultyService } from '../mock-api-faculty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.css'
})
export class AddFacultyComponent {

  id=0;
  constructor(private __api:MockAPIFacultyService,private __router:Router,private __actRoute:ActivatedRoute){}

  myForm = new FormGroup({
    facultyname : new FormControl(),
    facultyage: new FormControl(),
    facultyimage : new FormControl(),
    facultymobile : new FormControl(),
    facultyemail : new FormControl(),
  });

  ngOnInit(){
    this.id = this.__actRoute.snapshot.params['id'];
    if(this.id!=0){
      this.__api.getbyid(this.id).subscribe((res:any)=>{
        this.myForm.controls.facultyname.setValue(res.facultyname);
        this.myForm.controls.facultyage.setValue(res.facultyage);
        this.myForm.controls.facultyimage.setValue(res.facultyimage);
        this.myForm.controls.facultymobile.setValue(res.facultymobile);
        this.myForm.controls.facultyemail.setValue(res.facultyemail);
      });
    }
  }

  add(){
    console.log("form value:- ",this.myForm.value);
    this.__api.insert(this.myForm.value).subscribe((res)=>{
      this.__router.navigate(['/MockAPI']);
    });
  }

  edit(){
    this.__api.update(this.id,this.myForm.value).subscribe((res)=>{
      this.__router.navigate(['MockAPI']);
    });
  }
}
