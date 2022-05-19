import { Component } from '@angular/core';

@Component({
  selector: 'space-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss'],
})
export class PhaseComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false,
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2',
    },
  ];
}
