import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page-shell.component.html',
  styleUrls: ['./second-page-shell.component.scss']
})
export class SecondPageShellComponent {
  inputValue = '';

  onChange(event: Event) {
    this.inputValue = (<HTMLInputElement> event.target).value;
  }
}
