import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent {
  @Input() comment: any;

  @Output() emitComment: EventEmitter<any> = new EventEmitter();

  onCommentEmit(comment: Comment) {
    this.emitComment.emit(comment);
  }
}
