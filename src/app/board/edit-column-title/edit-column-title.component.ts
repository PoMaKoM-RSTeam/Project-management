import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-edit-column-title',
  templateUrl: './edit-column-title.component.html',
  styleUrls: ['./edit-column-title.component.scss'],
})
export class EditColumnTitleComponent {
  constructor(public boardService: BoardService, private route: ActivatedRoute) {}

  isShowInputEdit = false;

  @Input() column: Column | undefined;

  showInputEditHandle() {
    this.isShowInputEdit = true;
  }

  hideInputEditHandle() {
    this.isShowInputEdit = false;
  }

  submitEditHandle(newTitle: string) {
    if (this.column) {
      this.boardService.editColumn(newTitle, this.route.snapshot.params['id'], this.column);
      this.hideInputEditHandle();
    }
  }
}
