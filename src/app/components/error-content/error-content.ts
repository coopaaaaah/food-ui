import {Component, Input} from "@angular/core";
@Component({
    selector: 'error-content',
    templateUrl: './error-content.html'
})
export class ErrorContentComponent {

    @Input() error: string;

  closeError(){
    this.error = '';
  }

}
