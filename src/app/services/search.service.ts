import { Injectable } from '@angular/core';
import { Board, Task } from '../models/column.model';
import { BoardsAPIService } from './boards-api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private reqToBoardsApi: BoardsAPIService) {}

  error: boolean = false;

  user: any = null;

  boards: Board[] = [];

  result: Task[] = [];

  showNotFound = false;

  isLoading = false;

  loading() {
    this.isLoading = true;
  }

  loaded() {
    this.isLoading = false;
  }

  search(value: string) {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      this.loading();
      return this.reqToBoardsApi.getAllBoards(tokenId).subscribe((data) => {
        this.result = [];
        this.boards = data;
        this.boards.forEach((board) => {
          this.reqToBoardsApi.getBoardByID(board.id, tokenId).subscribe((oneBoardData) => {
            oneBoardData.columns?.forEach((column: any) => {
              this.user = column?.tasks.filter((task: any) => task?.title?.includes(value));
              if (this.user.length !== 0) {
                this.result?.push(...this.user);
                this.showNotFound = false;
              } else {
                this.showNotFound = true;
              }
            });
            this.loaded();
          });
        });
      });
    }
    return false;
  }
}
