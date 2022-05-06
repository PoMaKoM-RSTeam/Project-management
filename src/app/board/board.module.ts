import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BoardComponent } from './board/board.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';

import { DialogModule } from '../dialog/dialog.module';
import { ColorPanelComponent } from './color-panel/color-panel.component';
import { HeaderComponent } from './header/header.component';
import { SpaceModule } from '../space/space.module';

@NgModule({
  declarations: [BoardComponent, BoardItemComponent, CommentItemComponent, ColorPanelComponent, HeaderComponent],
  imports: [CommonModule, DragDropModule, FormsModule, DialogModule, NzIconModule, SpaceModule, NzButtonModule],
  exports: [BoardComponent],
})
export class BoardModule {}
