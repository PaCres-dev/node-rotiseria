import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

	foods:any[]=[];

  food:any={}

	//foodsUrl: string = 'http://localhost:3000/api/';

  	constructor(private http: HttpClient) { }

  	getFood() {
  		return this.http.get('/foods')
	    .pipe(map((res: any) => {
	        this.foods = res;
	        return this.foods;
	    }));
  	}

    addFood(food) {
      return this.http.post('/newfood', food)
      .pipe(map((res: any) => {
          this.food = res;
          return this.food;
      }));
    }

    delFood(foodid:string) {
      return this.http.delete('/delfood/' + foodid);
    }

    getFoods(idx: string){
      return this.food[idx];
    }
}
