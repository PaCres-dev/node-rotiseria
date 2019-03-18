import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  crud() {
    this.router.navigate(['/admin/crud']);
  }

  orders() {
    this.router.navigate(['/admin/pedidos']);
  }
}
