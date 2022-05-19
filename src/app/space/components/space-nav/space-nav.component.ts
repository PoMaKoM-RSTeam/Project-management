import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { INavLinks } from '../../../core/interfaces/nav-links.interface';
import { SpaceHeaderService } from '../../../services/space-header.service';

@Component({
  selector: 'space-nav',
  templateUrl: './space-nav.component.html',
  styleUrls: ['./space-nav.component.scss'],
})
export class SpaceNavComponent implements OnInit {
  links: INavLinks = { links: [], active: '' };

  constructor(private spaceHeaderService: SpaceHeaderService, private router: Router, private location: Location) {
    this.links = spaceHeaderService.navLinks;
  }

  ngOnInit() {
    const path = this.router.url.split('/')[1];
    this.spaceHeaderService.setActive(path);
  }

  changeActive(title: string | undefined) {
    if (title) {
      this.spaceHeaderService.setActive(title);
    }
  }
}
