import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { MockAPIComponent } from './mock-api/mock-api.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';

const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'MockAPI',component:MockAPIComponent},
  {path:'faculty/add',component:AddFacultyComponent},
  {path:'faculty/edit/:id',component:AddFacultyComponent},
  {path:'faculty/:id',component:FacultyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
