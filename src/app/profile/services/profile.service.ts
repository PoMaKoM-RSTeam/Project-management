import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UsersAPIService } from '../../services/users-api.service';
import { ITokenInfo, UserPut } from '../../models/column.model';
import { AuthService } from '../../auth/services/auth.service';
import { Message } from '../../../constants/enums';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private router: Router,
    private reqToUsersApi: UsersAPIService,
    private authService: AuthService,
    private message: NzMessageService,
  ) {}

  name = '';

  login = '';

  password = '';

  isLoading = false;

  isLoadingBlock = false;

  loading() {
    this.isLoading = true;
  }

  loaded() {
    this.isLoading = false;
  }

  loadingBlock() {
    this.isLoadingBlock = true;
  }

  loadedBlock() {
    this.isLoadingBlock = false;
  }

  nameHandle(value: string) {
    this.name = value;
  }

  loginHandle(value: string) {
    this.login = value;
  }

  passwordHandle(value: string) {
    this.password = value;
  }

  getUserData() {
    const tokenId = window.localStorage.getItem('userTokenMid') || '';
    const tokenInfo: ITokenInfo = jwt_decode(tokenId);
    return this.reqToUsersApi.getUserByID(tokenInfo.userId, tokenId);
  }

  updateUserDate() {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      const tokenInfo: ITokenInfo = jwt_decode(tokenId);
      const newUserData: UserPut = {
        name: this.name,
        login: this.login,
        password: this.password,
      };
      this.loadingBlock();
      this.reqToUsersApi.updateUser(tokenInfo.userId, newUserData, tokenId).subscribe((response) => {
        window.localStorage.setItem('userLogin', response.login);
        this.password = '';
        this.message.create(Message.SUCCESS, `${response.name}, you updated your account!`);
        this.loadedBlock();
      });
    }
  }

  removeUser() {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      const tokenInfo: ITokenInfo = jwt_decode(tokenId);
      this.loadingBlock();
      this.reqToUsersApi.deleteUser(tokenInfo.userId, tokenId).subscribe((response) => {
        if (response === null) {
          this.authService.logoutHandle();
          this.message.create(
            Message.SUCCESS,
            'You deleted your account and have been redirected to authentication page!',
          );
        }
        this.loadedBlock();
      });
    }
  }
}
