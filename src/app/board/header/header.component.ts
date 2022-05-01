import { Component } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'board-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public boardService: BoardService) {}

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event);
    }
  }
}
