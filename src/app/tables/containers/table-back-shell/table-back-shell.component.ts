import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable, share, switchMap, combineLatest, tap, delay, combineLatestWith} from 'rxjs';
import {IUser} from '../../../core/models/user.interface';
import {Sort} from '@angular/material/sort';
import {TablesService} from '../../services/tables.service';
import {PageEvent} from '@angular/material/paginator';
import {LoaderService} from '../../../core/services/loader.service';

interface IPaginationSubject {
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: 'app-table-back-shell',
  templateUrl: './table-back-shell.component.html',
  styleUrls: ['./table-back-shell.component.scss']
})
export class TableBackShellComponent implements OnInit, AfterViewInit {
  public users$: Observable<IUser[]>;
  public sortedUsers$: Observable<IUser[]>
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
  ) {
  }

  public ngOnInit(): void {
    this.users$ = this.paginationChangedAction$.pipe(
      switchMap(({pageIndex, pageSize}) =>
        this.tablesService.fetchUsers({page: pageIndex + 1, results: pageSize})
      ),
      share()
    );

    this.sortedUsers$ = this.sortChangedAction$.pipe(
      combineLatestWith(this.users$)
    ).pipe(
      map(([sort, users]) => this.tablesService.sortUsers(users, sort)),
      tap(console.log)
    )

    this.totalSize$ = this.tablesService.fetchUsers()
      .pipe(
        map(users => users.length)
      );
  }

  ngAfterViewInit() {

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
