import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './services/profile.service';
import { regexpPassword } from '../../constants/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;

  constructor(public profileService: ProfileService) {
    this.form = this.initForm('', '');
  }

  ngOnInit() {
    this.profileService.getUserData().subscribe((response) => {
      this.profileService.nameHandle(response.name);
      this.profileService.loginHandle(response.login);
      this.form = this.initForm(response.name, response.login);
    });
  }

  initForm(name: string, login: string) {
    return new FormGroup({
      userName: new FormControl(name, [Validators.required]),
      userLogin: new FormControl(login, [Validators.required]),
      userNewPassword: new FormControl('', [Validators.required, Validators.pattern(regexpPassword)]),
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
