import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIcon } from '../../../../constants/enums';
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
    public boardService: BoardService,
    public route: ActivatedRoute,
  ) {}

  @Input() pageName: string = 'Page Name';

  @Input() title: string = 'All Boards';

  iconBoard = NgIcon.BOARD;

  isCollapsed = false;

  isSpaceSearchVisible = false;

  boards: Board[] = [];

  ngOnInit() {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      this.boardsAPIService.getAllBoards(tokenId).subscribe((response) => {
        this.boards = response;
      });
    }
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
      const tokenId = window.localStorage.getItem('userTokenMid');
      if (tokenId) {
        this.boardsAPIService.createBoard(title, tokenId).subscribe((response) => {
          this.boards = [...this.boards, response];
        });
      }
    }
  }

  editBoard(title: string, id: string) {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      this.boardsAPIService.updateBoard(id, { title }, tokenId).subscribe((response) => {
        const index = this.boards.findIndex((board) => board.id === id);
        this.boards[index] = response;
      });
    }
  }

  removeBoard(isConfirm: boolean, id: string) {
    if (isConfirm) {
      const tokenId = window.localStorage.getItem('userTokenMid');
      if (tokenId) {
        this.boardsAPIService.deleteBoard(id, tokenId).subscribe((response) => {
          if (response === null) {
            this.boards = this.boards.filter((board) => board.id !== id);
          }
        });
      }
    }
  }

  redirectToBoard(id: string) {
    this.router.navigate([`/board/${id}`]);
    this.boardService.boardInit(id);
  }
}
