import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/Rx";
import {Food} from "../../assets/Food";

@Injectable()
export class FoodService{

    constructor(public http: Http){}

    public getAllFood(): Observable<Array<Food>> {
        return this
          .http
          .get('http://localhost:5000/api/v1/foods')
          .map(data => data.json());
    }

    public getFoodByDescription(description: string): Observable<Array<Food>> {
        return this
          .http
          .get('http://localhost:5000/api/v1/foods/findByDescription/' + description)
          .map(data => data.json());
    }

}
