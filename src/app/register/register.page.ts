import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../services/authentication-service'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  goRegister()
  {
    // Here is where you want to grab the values entered from the register.page.html
    

  }

  ngOnInit() {
  }

}
