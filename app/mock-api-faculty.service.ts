import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockAPIFacultyService {
  url="https://65e6c4c253d564627a8cebb1.mockapi.io/faculty";
  constructor(private http:HttpClient) { }

  getallfacultys(){
    var result = this.http.get(this.url);
    console.log("get result:-",result);
    return result;
  }

  getbyid(id:any){
    return this.http.get(this.url + '/' + id);
  }

  delete(id:any){
    return this.http.delete(this.url + '/' + id);
  }

  insert(anything:any){
    var insertresult = this.http.post(this.url,anything);
    console.log("insert result:-",insertresult);
    return insertresult;
  }

  update(id:any,form:any){
    return this.http.put(this.url + '/' + id,form);
  }
}
