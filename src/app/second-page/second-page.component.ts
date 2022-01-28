import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {
  inputValue = '';

  onChange(event: Event) {
    this.inputValue = (<HTMLInputElement> event.target).value;
  }
}
