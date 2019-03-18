import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Normal Routes
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';

//Users
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

//Orders
import { MakeorderComponent } from './components/orders/makeorder/makeorder.component';
import { StatusorderComponent } from './components/orders/statusorder/statusorder.component';

//Admin
import { AdminComponent } from './components/admin/admin.component';
import { CrudComponent } from './components/admin/crud/crud.component';
import { PedidosComponent } from './components/admin/pedidos/pedidos.component';

import { AddComponent } from './components/admin/crud/thecrud/add/add.component';
import { DelComponent } from './components/admin/crud/thecrud/del/del.component';


const routes: Routes = [
	//Normal Routes
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'menu', component: MenuComponent },
	{ path: 'contact', component: ContactComponent },

	//Login
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },

	//Orders
	{ path: 'makeorder', component: MakeorderComponent },
	{ path: 'statusorder', component: StatusorderComponent },

	//Admin
	{ path: 'admin', component: AdminComponent },
	{ path: 'admin/crud', component: CrudComponent },
	{ path: 'admin/pedidos', component: PedidosComponent },

	{ path: 'admin/crud/add', component: AddComponent },
	{ path: 'admin/crud/del/:id', component: DelComponent }, 

	//404
	{ path: '**', pathMatch: 'full', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
