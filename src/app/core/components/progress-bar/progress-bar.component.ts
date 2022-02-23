import {Component, Input, OnInit} from '@angular/core';
import {AppServiceService} from '../../../app-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  public isLoaderShown$: Observable<boolean> = this.appService.isLoaderShown$;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
  }

}
