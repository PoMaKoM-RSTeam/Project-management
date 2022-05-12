import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmitCardItem, IEmitText } from './board-item.models';
import { IDialogModel } from '../../models/dialog.model';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss'],
})
export class BoardItemComponent {
  constructor(public boardService: BoardService, private route: ActivatedRoute) {}

  @Input() item: any;

  @Output() emitText: EventEmitter<IEmitText> = new EventEmitter();

  @Output() emitCardItem: EventEmitter<IEmitCardItem> = new EventEmitter();

  @Output() emitDeleteCard: EventEmitter<string> = new EventEmitter();

  commentInput = '';

  open = false;

  onOpenComment() {
    this.open = !this.open;
  }

  onCommentTextEmit(id: string) {
    this.emitText.emit({ id, text: this.commentInput });
    this.commentInput = '';
  }

  onCardItemEmit(card: any, increase: boolean) {
    this.emitCardItem.emit({ card, increase });
  }

  onCardDelete(isConfirm: boolean, id: string) {
    if (isConfirm) {
      this.emitDeleteCard.emit(id);
    }
  }

  editTask(text: IDialogModel, item: any) {
    if (text && text.text && text.description) {
      this.boardService.editTask(text, item, this.route.snapshot.params['id']);
    }
  }
}
