import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerUser:Object = {
      email: null,
      password: null,
      passwordConfirm: null,
    }

    message:any = "";

	constructor(private Auth: AuthService, private router: Router) { }

	ngOnInit() {
	}

	register()
	{	
		this.Auth.creatNewUser(this.registerUser)
		.subscribe(data => {
        	if (data != null) {
          		console.log(data);
          		this.message = "Usuario creado";
        	}
        	else {
          		this.message = "Error";
        	}
      	});
	}

}
