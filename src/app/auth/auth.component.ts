import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { regexpPassword } from '../../constants/constants';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  form: FormGroup;

  formSignUp: FormGroup;

  constructor(public authService: AuthService) {
    this.form = new FormGroup({
      userEmail: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
    });

    this.formSignUp = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userLogin: new FormControl('', [Validators.required]),
      userNewPassword: new FormControl('', [Validators.required, Validators.pattern(regexpPassword)]),
    });
  }

  submit() {
    if (this.form.valid) this.authService.comeIn();
  }

  submitSignUp() {
    if (this.formSignUp.valid) this.authService.signUpNewUser();
  }
}
