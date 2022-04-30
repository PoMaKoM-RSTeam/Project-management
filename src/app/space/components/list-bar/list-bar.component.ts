import { Component } from '@angular/core';

@Component({
  selector: 'space-list-bar',
  templateUrl: './list-bar.component.html',
  styleUrls: ['./list-bar.component.scss'],
})
export class ListBarComponent {
  public groupFilter = {
    title: 'Group by',
    items: { items: ['Status', 'b', 'c'], current: 'Status' },
  };

  public subtasksFilter = {
    title: 'Subtasks',
    items: { items: ['Hide', 'b', 'c'], current: 'Hide' },
  };
}
