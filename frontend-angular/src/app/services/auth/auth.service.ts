import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

	//usersUrl: string = 'http://localhost:3000/api/';

	user:any = {};

  constructor(private http: HttpClient) { }

  getUserDetails(loginUser)
  {
    return this.http.post('/users', loginUser, { withCredentials: true })
    .pipe(map((res: any) => {
        this.user = res;
        return this.user;
    }));
  }

  creatNewUser(registerUser)
  {
    return this.http.post('/newuser', registerUser)
    .pipe(map((res: any) => {
          this.user = res;
          return this.user;
      }));
  }

  logged() {
    return this.http.get('/user', { withCredentials: true })
    .pipe(map((res: any) => {
        this.user = res;
        return this.user;
    }));
  }

  logout() {
    return this.http.get('/logout', { withCredentials: true })
    .pipe(map((res: any) => {
        this.user = res;
        return this.user;
    }));
  }
}
