import { Component, Input, OnInit } from '@angular/core';
import { LinkIcon } from '../../../../constants/enums';
import { BoardsAPIService } from '../../../../services/boards-api.service';
import { Board } from '../../../../models/column.model';

@Component({
  selector: 'space-left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss'],
})
export class LeftAsideComponent implements OnInit {
  constructor(private boardsAPIService: BoardsAPIService) {}

  @Input() pageName: string = 'Page Name';

  @Input() title: string = 'Title';

  iconBoard = LinkIcon.BOARD;

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
}
