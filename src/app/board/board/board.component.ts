import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardService } from 'src/app/services/board.service';
import { Card } from 'src/app/models/column.model';
import { ActivatedRoute } from '@angular/router';
import { BoardsAPIService } from '../../services/boards-api.service';
import { Colors } from '../../../constants/enums';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(
    public boardService: BoardService,
    private reqToBoardsApi: BoardsAPIService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.reqToBoardsApi.getBoardByID(this.route.snapshot.params['id']).subscribe((data) => {
      console.log(2, data);
      this.boardService.changeTitleBoard(data.title);
      this.boardService.changeBoardColumnsAll(
        data.columns
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((item) => ({
            ...item,
            color: Colors.GREEN,
            tasks: item.tasks.map((task) => ({ ...task, text: task.title, like: 0, comments: [] })),
          })),
      );
    });
  }

  onColorChange(color: string, columnId: string) {
    this.boardService.changeColumnColor(color, columnId);
  }

  onAddCard(text: { text: string; description: string }, columnId: string) {
    if (text) {
      this.boardService.addCard(text.text, columnId, this.route.snapshot.params['id'], text.description);
    }
  }

  onDeleteColumn(isConfirm: boolean, columnId: string) {
    if (isConfirm) {
      this.boardService.deleteColumn(columnId, this.route.snapshot.params['id']);
    }
  }

  onDeleteCard(cardId: string, columnId: string) {
    this.boardService.deleteCard(cardId, columnId, this.route.snapshot.params['id']);
  }

  onChangeLike(event: { card: any; increase: boolean }, columnId: string) {
    const {
      card: { id },
      increase,
    } = event;
    this.boardService.changeLike(id, columnId, increase);
  }

  onAddComment(event: { id: string; text: string }, columnId: string) {
    this.boardService.addComment(columnId, event.id, event.text);
  }

  onDeleteComment(comment: { id: number }, columnId: string, item: { id: string }) {
    this.boardService.deleteComment(columnId, item.id, comment.id);
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
