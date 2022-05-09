import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardService } from 'src/app/services/board.service';
import { Card } from 'src/app/models/column.model';
import { ActivatedRoute } from '@angular/router';
import { BoardsAPIService } from '../../services/boards-api.service';

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
      this.boardService.changeBoardColumnsAll(data.columns);
    });
  }

  onColorChange(color: string, columnId: string) {
    this.boardService.changeColumnColor(color, columnId);
  }

  onAddCard(text: string, columnId: string) {
    if (text) {
      this.boardService.addCard(text, columnId);
    }
  }

  onDeleteColumn(columnId: string) {
    this.boardService.deleteColumn(columnId);
  }

  onDeleteCard(cardId: number, columnId: string) {
    this.boardService.deleteCard(cardId, columnId);
  }

  onChangeLike(event: { card: any; increase: boolean }, columnId: string) {
    const {
      card: { id },
      increase,
    } = event;
    this.boardService.changeLike(id, columnId, increase);
  }

  onAddComment(event: { id: number; text: string }, columnId: string) {
    this.boardService.addComment(columnId, event.id, event.text);
  }

  onDeleteComment(comment: { id: number }, columnId: string, item: { id: number }) {
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
