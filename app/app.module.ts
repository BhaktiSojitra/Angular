import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { MockAPIComponent } from './mock-api/mock-api.component';
import { HttpClientModule } from '@angular/common/http';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    FormComponent,
    HeaderComponent,
    MockAPIComponent,
    FacultyDetailsComponent,
    AddFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
