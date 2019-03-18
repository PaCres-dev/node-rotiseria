import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isAuthenticated:boolean;

  constructor(private Auth: AuthService, private router: Router) {
		this.Auth.logged()
	    .subscribe(data => {
				if (data.success) {
					console.log(data);
					this.isAuthenticated = true;
				}
				else {
					console.log(data);
					this.isAuthenticated = false;
				}
	    });
	}

	ngOnInit() {}

	isLogged() {
		this.Auth.logged()
	    .subscribe(data => {
	        if (data.success) {
						console.log(data);
	          this.router.navigate(['/makeorder'])
	        }
	        else {
						console.log(data);
	          this.router.navigate(['/login'])
	        }
	    });
	}

	logout() {
		this.Auth.logout().subscribe(data => {
			if (data.success) {
				console.log(data);
				this.isAuthenticated = false;
			}
		});
	}
}
