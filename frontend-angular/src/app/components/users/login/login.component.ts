import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginUser:Object = {
      email: null,
      password: null
    }

    message:any = "";

  	constructor(private Auth: AuthService, private router: Router) { }

  	ngOnInit() {
  	}

  	login()
  	{
  		this.Auth.getUserDetails(this.loginUser)
      .subscribe(data => {
        if (data.success) {
          console.log(data);
          this.message = "Usuario encontrado";
          this.router.navigate(['/makeorder']);
          window.location.reload();
        }
        else {
          console.log(data);
          this.message = "Usuario desconocido";
        }
      }); 
  		console.log(this.loginUser);
  	}

    register() {
      this.router.navigate(['/register']);
    }
}