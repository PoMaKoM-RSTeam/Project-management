import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() isForBlock: boolean = false;

  @Input() left: string | undefined;

  @Input() nzSize: 'large' | 'small' | 'default' = 'large';
}
