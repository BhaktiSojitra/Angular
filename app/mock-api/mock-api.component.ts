import { Component } from '@angular/core';
import { MockAPIFacultyService } from '../mock-api-faculty.service';
import { Faculty } from './faculty';
@Component({
  selector: 'app-mock-api',
  templateUrl: './mock-api.component.html',
  styleUrl: './mock-api.component.css'
})
export class MockAPIComponent {
  data:Faculty[]=[];
  constructor(private api:MockAPIFacultyService){}

  ngOnInit(){
    /*var result1 = this.api.getallfacultys();
    console.log("before write subscribe getallfacultys result:- ",result1); //return Observable  */
    var result2 = this.api.getallfacultys().subscribe((res:any)=>{
      console.log("res:-",res);
      this.data = res;
      console.log(this.data);
    });
    console.log("after write subscribe getallfacultys result:- ",result2);
  }

  delete(id:any){
    this.api.delete(id).subscribe((res)=>{
      this.ngOnInit();
    })
  }
}
