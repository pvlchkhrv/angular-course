import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {

  }

  public onChildFormIsReady(formGroup: FormGroup): void {
    this.loginForm = formGroup;
  }

  private checkFormValidity(): boolean {
    if(this.loginForm.valid) {
      return true;
    }
    this.loginForm.markAllAsTouched();
    return false
  }

  public onSubmit(): void {
    const {userName, password} = this.loginForm.value;
    if (this.checkFormValidity()) {
      this.authService.login(userName, password);
      this.router.navigate(['users'])
    }
  }

}
