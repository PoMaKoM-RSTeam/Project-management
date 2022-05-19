import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      this.router.navigate(['/board']);
    }
  }
}
