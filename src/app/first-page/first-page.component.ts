import {Component} from '@angular/core';

export interface IUser {
  name: string;
  age: number;
  activated: boolean;
  imgUrl: string;
}

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  isAllCards: boolean = true;

  users: IUser[] = [
    {name: 'Bear', age: 6, activated: false, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg'},
    {name: 'Lynx', age: 5, activated: true, imgUrl: 'https://i0.wp.com/wilderness-society.org/wp-content/uploads/2015/07/natura-2000-research-in-czech-republic-2.jpg'},
    {name: 'Wolf', age: 8, activated: true, imgUrl: 'https://media.euobserver.com/cf4f55c5e4802a1a4fedf5c93f3bc36b-800x.jpg'},
    {name: 'Dog', age: 3, activated: true, imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  ]

  toggle() {
    this.isAllCards = !this.isAllCards;
  }

  isDisabled() {
    return !this.users.some(user => !user.activated);
  }
}
