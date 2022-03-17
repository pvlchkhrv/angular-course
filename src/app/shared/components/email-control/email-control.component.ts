import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, Validators} from "@angular/forms";

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl?.pristine || confirmControl?.pristine) {
    return null;
  }

  if (emailControl?.value === confirmControl?.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-email-control',
  templateUrl: './email-control.component.html',
  styleUrls: ['./email-control.component.scss']
})
export class EmailControlComponent implements OnInit {
  @Output() public emailControlReady = new EventEmitter<FormControl>();
  public emailControl: FormControl = new FormControl(
    '',
    [Validators.required, Validators.email]
  );

  constructor() {
  }

  public ngOnInit(): void {
    this.emailControlReady.emit(this.emailControl);
  }

}
