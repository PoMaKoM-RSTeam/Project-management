import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  toggleControl = new FormControl(false);

  @HostBinding('class') className = '';

  constructor(private dialog: MatDialog, private overlay: OverlayContainer, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.renderer.addClass(document.body, darkClassName);
      } else {
        this.renderer.removeClass(document.body, darkClassName);
      }
    });
  }
}
