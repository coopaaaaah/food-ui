import {Component, Input} from "@angular/core";
import {Food} from "../../../assets/Food";

@Component({
  selector: 'food-card',
  templateUrl: 'food-card.html'
})
export class FoodCardComponent {

  @Input() food: Food;
  showDescription: boolean = false;

  toggleDescription(){
    this.showDescription = !this.showDescription;
  }

}
