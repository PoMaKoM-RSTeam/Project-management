import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column, Comment, IColumnPost, TaskPost, TaskPut, User } from '../models/column.model';
// import { Colors, Board } from '../../constants/enums';
import { Colors } from '../../constants/enums';
import { ColumnsAPIService } from './columns-api.service';
import { TasksAPIService } from './tasks-api.service';
import { UsersAPIService } from './users-api.service';
import { IDialogModel } from '../models/dialog.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(
    private reqToColumnsApi: ColumnsAPIService,
    private reqToTasksApi: TasksAPIService,
    private reqToUsersApi: UsersAPIService,
  ) {}

  private initBoard = [
    // {
    //   id: 1,
    //   title: Board.TITLE,
    //   color: Colors.GREEN,
    //   list: [
    //     {
    //       id: 1,
    //       text: Board.TEXT,
    //       like: 1,
    //       comments: [
    //         {
    //           id: 1,
    //           text: Board.COMMENT,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  public editTitle = '';

  private board: Column[] = this.initBoard;

  private board$ = new BehaviorSubject<Column[]>(this.initBoard);

  public titleBoard = 'Loading Board';

  private users: User[] = [];

  editTitleHandle(newTitle: string) {
    this.editTitle = newTitle;
  } /* done */

  changeTitleBoard(newTitle: string) {
    this.titleBoard = newTitle;
  } /* done */

  getBoard$() {
    return this.board$.asObservable();
  }

  changeBoardColumnsAll(value: any) {
    this.board = [...value];
    this.board$.next([...value]);
  } /* done */

  changeColumnColor(color: string, columnId: string) {
    this.board = this.board.map((column: Column) => {
      const col = column;
      if (column.id === columnId) {
        col.color = color;
        return col;
      }
      return column;
    });
    this.board$.next([...this.board]);
  } /* to-do or done */

  createColumn(body: IColumnPost, id: string, tokenId: string, order: number) {
    this.reqToColumnsApi.createColumn(body, id, tokenId).subscribe((response) => {
      const newColumn: Column = {
        id: response.id,
        title: response.title,
        color: Colors.GREEN,
        tasks: [],
        order,
      };
      this.board = [...this.board, newColumn];
      this.board$.next([...this.board]);
    });
  } /* done */

  addColumn(title: string, id: string) {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      const order = window.localStorage.getItem('orderColumn');
      if (order) {
        const nextOrder = +order + 1;
        const body = {
          title,
          order: nextOrder,
        };
        window.localStorage.setItem('orderColumn', `${nextOrder}`);
        this.createColumn(body, id, tokenId, nextOrder);
      } else {
        window.localStorage.setItem('orderColumn', '1');
        const body = {
          title,
          order: 1,
        };
        this.createColumn(body, id, tokenId, 1);
      }
    }
  } /* done */

  createCard(boardId: string, columnId: string, newCard: TaskPost, tokenId: string) {
    this.reqToTasksApi.createTask(boardId, columnId, newCard, tokenId).subscribe((response) => {
      this.board = this.board.map((column: Column) => {
        const col = column;
        if (column.id === columnId) {
          col.tasks = [
            ...column.tasks,
            { id: response.id, text: response.title, description: response.description, like: 0, comments: [] },
          ];
          return col;
        }
        return column;
      });

      this.board$.next([...this.board]);
    });
  } /* done */

  addCard(text: string, columnId: string, boardId: string, description: string) {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      const order = window.localStorage.getItem('orderTask');
      if (order) {
        const nextOrder = +order + 1;
        window.localStorage.setItem('orderTask', `${nextOrder}`);

        this.reqToUsersApi.getAllUsers(tokenId).subscribe((users) => {
          this.users = users;

          const userLogin = window.localStorage.getItem('userLogin');
          if (userLogin) {
            const currentUser = this.users.find((user) => user.login === userLogin);
            if (currentUser) {
              const newCard: TaskPost = {
                title: text,
                order: nextOrder,
                description,
                userId: currentUser.id,
              };
              this.createCard(boardId, columnId, newCard, tokenId);
            }
          }
        });
      } else {
        window.localStorage.setItem('orderTask', '1');

        this.reqToUsersApi.getAllUsers(tokenId).subscribe((users) => {
          this.users = users;

          const userLogin = window.localStorage.getItem('userLogin');
          if (userLogin) {
            const currentUser = this.users.find((user) => user.login === userLogin);
            if (currentUser) {
              const newCard: TaskPost = {
                title: text,
                order: 1,
                description,
                userId: currentUser.id,
              };
              this.createCard(boardId, columnId, newCard, tokenId);
            }
          }
        });
      }
    }
  } /* done */

  deleteColumn(columnId: string, boardId: string) {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      this.reqToColumnsApi.deleteColumn(boardId, columnId, tokenId).subscribe((response) => {
        if (response === null) {
          this.board = this.board.filter((column: Column) => column.id !== columnId);
          this.board$.next([...this.board]);
        }
      });
    }
  } /* done */

  deleteCard(cardId: string, columnId: string, boardId: string) {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      this.reqToTasksApi.deleteTask(boardId, columnId, cardId, tokenId).subscribe((response) => {
        if (response === null) {
          this.board = this.board.map((column: Column) => {
            const col = column;
            if (column.id === columnId) {
              col.tasks = column.tasks.filter((card: Card) => card.id !== cardId);
              return col;
            }
            return column;
          });

          this.board$.next([...this.board]);
        }
      });
    }
  } /* done */

  changeLike(cardId: string, columnId: string, increase: boolean) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const col = column;
        col.tasks = column.tasks.map((card: Card) => {
          const item = card;
          if (card.id === cardId) {
            if (increase) {
              item.like += 1;
              return item;
            }
            if (card.like > 0) {
              item.like -= 1;
              return item;
            }
          }
          return card;
        });
        return col;
      }
      return column;
    });

    this.board$.next([...this.board]);
  } /* to-do */

  addComment(columnId: string, cardId: string, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const col = column;
        col.tasks = column.tasks.map((card: Card) => {
          const item = card;
          if (card.id === cardId) {
            const newComment = {
              id: Date.now(),
              text,
            };
            item.comments = [newComment, ...card.comments];
            return item;
          }
          return card;
        });
        return col;
      }
      return column;
    });

    this.board$.next([...this.board]);
  } /* to-do */

  deleteComment(columnId: string, itemId: string, commentId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const col = column;
        col.tasks = column.tasks.map((card: Card) => {
          if (card.id === itemId) {
            const item = card;
            item.comments = card.comments.filter((comment: Comment) => {
              return comment.id !== commentId;
            });
            return item;
          }
          return card;
        });
        return col;
      }
      return column;
    });
    this.board$.next([...this.board]);
  } /* to-do */

  editColumn(title: string, boardId: string, column: Column) {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      const body = {
        title,
        order: column.order,
      };
      this.reqToColumnsApi.updateColumn(boardId, column.id, body, tokenId).subscribe((response) => {
        if (response) {
          const index = this.board.findIndex((item) => item.id === response.id);
          this.board[index] = response;
          this.board$.next([...this.board]);
        }
      });
    }
  } /* done */

  editTask(newValue: IDialogModel, oldItem: any, boardId: string) {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      const data: TaskPut = {
        title: newValue.text,
        order: oldItem.order,
        description: newValue.description,
        userId: oldItem.userId,
        boardId,
        columnId: oldItem.columnId,
      };
      this.reqToTasksApi.updateTask(boardId, oldItem.columnId, oldItem.id, data, tokenId).subscribe((response) => {
        if (response) {
          this.board = this.board.map((column) => {
            if (column.id === response.columnId) {
              const col = column;
              col.tasks = column.tasks.map((card) => {
                if (card.id === response.id) {
                  return {
                    ...response,
                    text: response.title,
                    like: oldItem.like,
                    comments: oldItem.comments,
                    columnId: response.columnId,
                  };
                }
                return card;
              });
              return col;
            }
            return column;
          });
          this.board$.next([...this.board]);
        }
      });
    }
  }
}
