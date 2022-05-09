import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column, Comment, IColumnPost } from '../models/column.model';
// import { Colors, Board } from '../../constants/enums';
import { Colors } from '../../constants/enums';
import { ColumnsAPIService } from './columns-api.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private reqToColumnsApi: ColumnsAPIService) {}

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

  editTitleHandle(newTitle: string) {
    this.editTitle = newTitle;
  }

  changeTitleBoard(newTitle: string) {
    this.titleBoard = newTitle;
  }

  getBoard$() {
    return this.board$.asObservable();
  }

  changeBoardColumnsAll(value: any) {
    this.board = [...value];
    this.board$.next([...value]);
  }

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
  }

  createColumn(body: IColumnPost, id: string, tokenId: string, order: number) {
    this.reqToColumnsApi.createColumn(body, id, tokenId).subscribe((response) => {
      const newColumn: Column = {
        id: response.id,
        title: response.title,
        color: Colors.GREEN,
        list: [],
        order,
      };
      this.board = [...this.board, newColumn];
      this.board$.next([...this.board]);
    });
  }

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
  }

  addCard(text: string, columnId: string) {
    const newCard: Card = {
      id: Date.now(),
      text,
      like: 0,
      comments: [],
    };

    this.board = this.board.map((column: Column) => {
      const col = column;
      if (column.id === columnId) {
        col.list = [newCard, ...column.list];
        return col;
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

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
  }

  deleteCard(cardId: number, columnId: string) {
    this.board = this.board.map((column: Column) => {
      const col = column;
      if (column.id === columnId) {
        col.list = column.list.filter((card: Card) => card.id !== cardId);
        return col;
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

  changeLike(cardId: number, columnId: string, increase: boolean) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const col = column;
        col.list = column.list.map((card: Card) => {
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
  }

  addComment(columnId: string, cardId: number, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const col = column;
        col.list = column.list.map((card: Card) => {
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
  }

  deleteComment(columnId: string, itemId: number, commentId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const col = column;
        col.list = column.list.map((card: Card) => {
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
  }

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
  }
}
