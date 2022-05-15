import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { BoardsAPIService } from '../services/boards-api.service';
import { Board, Task } from '../models/column.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private reqToBoardsApi: BoardsAPIService) {}

  isBoardSearchVisible = false;

  error: boolean = false;

  user: any = null;

  boards: Board[] = [];

  result: Task[] = [];

  findControl = new FormControl();

  openSearchInput(search: string) {
    if (!search) this.isBoardSearchVisible = !this.isBoardSearchVisible;
  }

  ngOnInit(): void {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      this.findControl.valueChanges
        .pipe(
          filter((value) => value.length > 2),
          debounceTime(1000),
          switchMap(() => {
            if (this.findControl.value.length > 2) {
              return this.reqToBoardsApi.getAllBoards(tokenId).pipe(
                catchError(() => {
                  this.user = null;
                  this.error = true;
                  return EMPTY;
                }),
              );
            }
            return EMPTY;
          }),
        )
        .subscribe((data) => {
          this.result = [];
          this.boards = data;
          this.boards.forEach((board) => {
            this.reqToBoardsApi.getBoardByID(board.id, tokenId).subscribe((oneBoardData) => {
              oneBoardData.columns?.forEach((column: any) => {
                this.user = column?.tasks.filter((task: any) => task?.title?.includes(this.findControl.value));
                if (this.user.length !== 0) {
                  this.result?.push(this.user);
                }
              });
              console.log(this.result);
            });
          });
        });
      this.error = false;
    }
  }
}
