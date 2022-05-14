import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;

  constructor(public profileService: ProfileService) {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userLogin: new FormControl('', [Validators.required]),
      userNewPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
      ]),
    });
  }

  ngOnInit() {
    this.profileService.getUserData().subscribe((response) => {
      this.profileService.nameHandle(response.name);
      this.profileService.loginHandle(response.login);
      this.form = new FormGroup({
        userName: new FormControl(response.name, [Validators.required]),
        userLogin: new FormControl(response.login, [Validators.required]),
        userNewPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        ]),
      });
    });
  }

  submit() {
    if (this.form.valid) {
      this.profileService.updateUserDate();
    }
  }

  onUserDelete(isConfirm: boolean) {
    if (isConfirm) {
      this.profileService.removeUser();
    }
  }
}
