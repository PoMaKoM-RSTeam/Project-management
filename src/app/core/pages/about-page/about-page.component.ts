import { Component } from '@angular/core';
import { ICollapse } from '../../interfaces/collapse.interface';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  searchLine = '';

  abouts: ICollapse[] = [
    {
      name: 'This is panel header 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      active: true,
      disabled: false,
    },
    {
      name: 'This is panel header 2',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laudantium. Placeat aliquam eos.',
      active: false,
      disabled: false,
    },
    {
      name: 'This is panel header 3',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, laudantium.',
      active: false,
      disabled: false,
    },
  ];

  changeSearchLine(search: string): void {
    this.searchLine = search;
  }
}
