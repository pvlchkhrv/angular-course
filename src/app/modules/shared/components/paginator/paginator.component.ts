import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() public length = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}
