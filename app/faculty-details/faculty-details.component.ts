import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockAPIFacultyService } from '../mock-api-faculty.service';
import { Faculty } from '../mock-api/faculty';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrl: './faculty-details.component.css'
})
export class FacultyDetailsComponent {
  id=0;
  data:Faculty = new Faculty(); 

  constructor(private actRoute:ActivatedRoute,private api:MockAPIFacultyService,private router:Router){}
  ngOnInit(){
    console.log(this.actRoute.snapshot.params['id']);
    this.id = this.actRoute.snapshot.params['id'];
    this.api.getbyid(this.id).subscribe((res:any)=>{
      console.log(res);
      this.data = res;
    });
  }

  delete(){
    this.api.delete(this.id).subscribe((res)=>{
      console.log("delete res:-",res);
      this.router.navigate(['/MockAPI']);
    });
  }
}
