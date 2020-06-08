import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authorization/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe( next => {
      console.log('loged in cunt');
    }, error => {
      console.log('error loading cnt');
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');

    return !!token;
  }

  logOut(){
    localStorage.removeItem('token');
    console.log('Logged Out');
  }
}
