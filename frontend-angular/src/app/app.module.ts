import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';

//Orders
import { MakeorderComponent } from './components/orders/makeorder/makeorder.component';
import { StatusorderComponent } from './components/orders/statusorder/statusorder.component';

//Users
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';


//Services
import { AuthService } from './services/auth/auth.service';
import { MessageService } from './services/messages/message.service';
import { FoodService } from './services/food/food.service';
import { OrderService } from './services/orders/order.service';


//Admin
import { AdminComponent } from './components/admin/admin.component';
import { CrudComponent } from './components/admin/crud/crud.component';

import { AddComponent } from './components/admin/crud/thecrud/add/add.component';
import { DelComponent } from './components/admin/crud/thecrud/del/del.component';
import { PedidosComponent } from './components/admin/pedidos/pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    MakeorderComponent,
    StatusorderComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    CrudComponent,
    AddComponent,
    DelComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    MessageService,
    FoodService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
