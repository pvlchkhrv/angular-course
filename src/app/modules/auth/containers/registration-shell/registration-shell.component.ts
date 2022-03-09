import {AfterContentChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration-shell',
  templateUrl: './registration-shell.component.html',
  styleUrls: ['./registration-shell.component.scss']
})
export class RegistrationShellComponent implements OnInit, AfterContentChecked {
  public registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  public ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({});
  }

  ngAfterContentChecked() {
    this.registrationForm.valueChanges.subscribe(value => console.log(value))
  }

  public onSubmit() {

  }

}
