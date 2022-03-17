import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatestWith, finalize, map, Observable, switchMap, tap } from 'rxjs';
import { IUser$ } from '../../../core/models/user.interface';
import { Sort } from '@angular/material/sort';
import { TablesService } from '../../services/tables.service';
import { PageEvent } from '@angular/material/paginator';
import { LoaderService } from '../../../core/services/loader.service';

interface IPaginationSubject {
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: 'app-table-back-shell',
  templateUrl: './table-back-shell.component.html',
  styleUrls: ['./table-back-shell.component.scss']
})
export class TableBackShellComponent implements OnInit {
  public usersPerPage$: Observable<IUser$[]>;
  public totalSize$: Observable<number>;
  public isLoading$: Observable<boolean> = this.loaderService.loadingAction$;

  private paginationChangedSubject = new BehaviorSubject<IPaginationSubject>({
    pageIndex: 0,
    pageSize: 10
  });
  public paginationChangedAction$ = this.paginationChangedSubject.asObservable();

  private sortChangedSubject = new BehaviorSubject<Sort>({active: 'name', direction: 'asc'});
  public sortChangedAction$ = this.sortChangedSubject.asObservable();

  constructor(
    private tablesService: TablesService,
    private loaderService: LoaderService
  ) {}

  public ngOnInit(): void {
    this.setUsersPerPage();

    this.totalSize$ = this.tablesService
      .fetchUsers()
      .pipe(
        map(users => users.length)
      );
  }

  private setUsersPerPage(): void {
    this.loaderService.showLoader()
    this.usersPerPage$ = this.paginationChangedAction$
      .pipe(
        switchMap(page => this.tablesService.fetchUsers({page: page.pageIndex, results: page.pageSize})),
        combineLatestWith(this.sortChangedAction$),
        map(([users, sort]) =>
          this.tablesService.sortUsers(users, sort)
        ),
        tap(() => this.loaderService.hideLoader())
      )

    // this.usersPerPage$ = combineLatest([
    //   this.paginationChangedAction$,
    //   this.sortChangedAction$
    // ]).pipe(
    //   switchMap(([{pageIndex, pageSize}, sort]) => [
    //     this.tablesService.fetchUsers({page: pageIndex, results: pageSize}),
    //     sort
    //   ]),
    //   map(([users, sort]) => this.tablesService.sortUsers(users, sort))
    // )

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
}
