import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { Board } from 'src/models/column.model';
import { BoardsAPIService } from 'src/services/boards-api.service';

@Component({
  selector: 'space-header',
  templateUrl: './space-header.component.html',
  styleUrls: ['./space-header.component.scss'],
})
export class SpaceHeaderComponent implements OnInit {
  @Input() title = 'Title';

  error: boolean = false;

  user: any = null;

  boards: Board[] = [];

  result: Task[] = [];

  findControl = new FormControl();

  isBoardSearchVisible = false;

  constructor(private reqToBoardsApi: BoardsAPIService) {}

  openSearchInput(search: string) {
    if (!search) this.isBoardSearchVisible = !this.isBoardSearchVisible;
  }

  ngOnInit(): void {
    this.findControl.valueChanges
      .pipe(
        filter((value) => value.length > 2),
        debounceTime(1000),
        switchMap(() =>
          this.reqToBoardsApi.getAllBoards().pipe(
            catchError(() => {
              this.user = null;
              this.error = true;
              return EMPTY;
            }),
          ),
        ),
      )
      .subscribe((data) => {
        this.result = [];
        this.boards = data;
        this.boards.forEach((board) => {
          this.reqToBoardsApi.getBoardByID(board.id).subscribe((oneBoardData) => {
            oneBoardData.columns?.forEach((column: any) => {
              this.user = column?.tasks.filter((task: any) => task?.title?.includes(this.findControl.value));
              if (this.user.length !== 0) {
                this.result?.push(this.user);
              }
            });
          });
        });
        console.log(this.result);
      });
    this.error = false;
  }
}
