import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../services/authorization/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser()
  {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
