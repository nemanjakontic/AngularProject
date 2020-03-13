import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() emited = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(rec: string) {
    this.emited.emit(rec);
  }

}
