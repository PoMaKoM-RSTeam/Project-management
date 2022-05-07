import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(public authService: AuthService) {
    this.form = new FormGroup({
      userEmail: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
      ]),
    });
  }

  ngOnInit() {
    console.log('auth ngOnInit');
    // this.store.dispatch(hideHeader());
  }

  submit() {
    if (this.form.valid) this.authService.comeIn();
  }
}
