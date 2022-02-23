import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, map, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit, OnDestroy {
  @Output() public valueChanged = new EventEmitter<string>();
  public value: string = 'Search for User';
  public userSearchControl: FormControl;
  private sub: Subscription;


  constructor() {
  }

  public ngOnInit(): void {
    this.userSearchControl = new FormControl('');
    this.sub = this.getValue().subscribe(value => this.valueChanged.emit(value));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onClearClick(): void {
    this.userSearchControl.patchValue('');
  }

  public getValue(): Observable<string> {
    return this.userSearchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map(value => value.trim().toLowerCase()),
      )
  }
}
