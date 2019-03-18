import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
  	}

  	goMenu() {
  		this.router.navigate(['/menu']);
  	}

  	goMakeorder() {
  		this.router.navigate(['/makeorder']);
  	}

  	goContact() {
  		this.router.navigate(['/contact']);
  	}

}
