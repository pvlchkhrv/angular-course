import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { IUser$ } from '../../../core/models/user.interface';
import { Sort } from '@angular/material/sort';
import { TablesService } from '../../services/tables.service';
import { PageEvent } from '@angular/material/paginator';

interface IPaginationSubject {
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: 'app-table-front-shell',
  templateUrl: './table-front-shell.component.html',
  styleUrls: ['./table-front-shell.component.scss']
})
export class TableFrontShellComponent implements OnInit {
  public usersPerPage$: Observable<IUser$[]>;
  public totalSize$: Observable<number>;

  private paginationChangedSubject = new BehaviorSubject<IPaginationSubject>({
    pageIndex: 0,
    pageSize: 10
  });
  public paginationChangedAction$ = this.paginationChangedSubject.asObservable();

  private sortChangedSubject = new BehaviorSubject<Sort>({active: 'name', direction: 'asc'});
  public sortChangedAction$ = this.sortChangedSubject.asObservable();

  constructor(private tablesService: TablesService) {
  }

  public ngOnInit(): void {
    this.setUsersPerPage();

    this.totalSize$ = this.tablesService
      .fetchUsers()
      .pipe(
        map(users => users.length)
      );
  }

  private setUsersPerPage(): void {
    this.usersPerPage$ = combineLatest([
      this.tablesService.fetchUsers(),
      this.paginationChangedAction$,
      this.sortChangedAction$
    ]).pipe(
      map(([users, {pageIndex, pageSize}, sort]) => {
        const calculatedUsers = this.calculateUsers(users, pageSize, pageIndex);
        return this.tablesService.sortUsers(calculatedUsers, sort);
      })
    )
  }

  public onPaginationChange(pageEvent: PageEvent): void {
    this.paginationChangedSubject.next({
      pageIndex: pageEvent.pageIndex,
      pageSize: pageEvent.pageSize
    });
  }

  public onSortChange(sort: Sort): void {
    this.sortChangedSubject.next(sort);
  }

  private calculateUsers(users: IUser$[], pageSize: number, pageIndex: number): IUser$[] {
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    return users.slice(start, end);
  }
}
