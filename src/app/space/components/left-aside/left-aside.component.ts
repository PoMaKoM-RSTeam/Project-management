import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colors, NgIcon } from '../../../../constants/enums';
import { BoardsAPIService } from '../../../services/boards-api.service';
import { Board } from '../../../models/column.model';
import { BoardService } from '../../../services/board.service';

@Component({
  selector: 'space-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss'],
})
export class LeftAsideComponent implements OnInit {
  constructor(
    private boardsAPIService: BoardsAPIService,
    private router: Router,
    private reqToBoardsApi: BoardsAPIService,
    public boardService: BoardService,
  ) {}

  @Input() pageName: string = 'Page Name';

  @Input() title: string = 'All Boards';

  iconBoard = NgIcon.BOARD;

  isCollapsed = false;

  isSpaceSearchVisible = false;

  boards: Board[] = [];

  ngOnInit() {
    this.boardsAPIService.getAllBoards().subscribe((response) => {
      this.boards = response;
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  closeAside(event: Event) {
    this.stopPropagation(event);
    this.isCollapsed = true;
    this.isSpaceSearchVisible = false;
  }

  openSearchInput(event: Event, search: string) {
    this.stopPropagation(event);

    if (!search) this.isSpaceSearchVisible = !this.isSpaceSearchVisible;
  }

  addBoard(title: string) {
    if (title) {
      this.boardsAPIService.createBoard(title).subscribe((response) => {
        this.boards = [...this.boards, response];
      });
    }
  }

  editBoard(title: string, id: string) {
    console.log('$event', title);
    this.boardsAPIService.updateBoard(id, { title }).subscribe((response) => {
      const index = this.boards.findIndex((board) => board.id === id);
      this.boards[index] = response;
    });
  }

  removeBoard(isConfirm: boolean, id: string) {
    if (isConfirm) {
      this.boardsAPIService.deleteBoard(id).subscribe((response) => {
        if (response === null) {
          this.boards = this.boards.filter((board) => board.id !== id);
        }
      });
    }
  }

  redirectToBoard(id: string) {
    this.router.navigate([`/board/${id}`]);

    this.reqToBoardsApi.getBoardByID(id).subscribe((data) => {
      console.log(1, data);
      this.boardService.changeTitleBoard(data.title);
      this.boardService.changeBoardColumnsAll(
        data.columns.sort((a, b) => (a.order > b.order ? 1 : -1)).map((item) => ({ ...item, color: Colors.GREEN })),
      );
    });
  }
}
