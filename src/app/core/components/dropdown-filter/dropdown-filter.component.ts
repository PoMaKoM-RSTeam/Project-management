import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss'],
})
export class DropdownFilterComponent {
  @Input() title: string = 'Title';

  @Input() items: { items: string[]; current: string } = { items: [], current: '' };
}
