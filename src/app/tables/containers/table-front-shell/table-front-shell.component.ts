import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, share, tap} from 'rxjs';
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
  public users$: Observable<IUser$[]>;
  public totalSize$: Observable<number>;

  constructor(private tablesService: TablesService) {
  }

  public ngOnInit(): void {
    this.users$ = this.tablesService.fetchUsers().pipe(share());
    this.totalSize$ = this.users$.pipe(map(users => users.length));
  }
}
