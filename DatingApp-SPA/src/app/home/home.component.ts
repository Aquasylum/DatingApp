import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRegister = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  toggleRegister()
  {
    this.isRegister = true;
  }


  cancelRegister(register: boolean){
    this.isRegister = false;
  }

}
