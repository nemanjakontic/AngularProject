import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() eventic: string;

  onEmit(someEvent: string) {
    console.log(someEvent);
    this.eventic = someEvent;
  }
}
