import { Component, Output, EventEmitter } from '@angular/core';

enum Colors {
  RED = '#e92c64',
  GREEN = '#009886',
  BLUE = '#208eed',
  VIOLET = '#912f84',
  YELLOW = '#b36619',
  PINK = '#6e1d96',
}

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss'],
})
export class ColorPanelComponent {
  @Output() emitColor: EventEmitter<string> = new EventEmitter();

  colorsData = Object.values(Colors);

  onColorEmit(color: string) {
    this.emitColor.emit(color);
  }
}
