import { Component, Input } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'board-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public boardService: BoardService, private route: ActivatedRoute) {}

  @Input() title = 'Loading Board';

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event, this.route.snapshot.params['id']);
    }
  }
}
