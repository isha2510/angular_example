import { Component } from '@angular/core';
import { HttpModule, RequestOptions, XHRBackend, Http, Response, Headers } from "@angular/http";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dbdata: any = null;
  private apiUrl = "http://localhost:7070/isha/all"

  constructor(private http: Http) {
    this.getData();
    this.add();
  }

  private getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }
  private add() {
    this.getData().subscribe(data => {
      this.dbdata=data;
      console.log(data);
      console.log(this.dbdata);
    })
  }

}
