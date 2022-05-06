import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column, Comment } from '../models/column.model';
import { Colors, Board } from '../../constants/enums';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private initBoard = [
    {
      id: 1,
      title: Board.TITLE,
      color: Colors.GREEN,
      list: [
        {
          id: 1,
          text: Board.TEXT,
          like: 1,
          comments: [
            {
              id: 1,
              text: Board.COMMENT,
            },
          ],
        },
      ],
    },
  ];

  private board: Column[] = this.initBoard;

  private board$ = new BehaviorSubject<Column[]>(this.initBoard);

  getBoard$() {
    return this.board$.asObservable();
  }

  changeColumnColor(color: string, columnId: number) {
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

  addColumn(title: string) {
    const newColumn: Column = {
      id: Date.now(),
      title,
      color: Colors.GREEN,
      list: [],
    };

    this.board = [...this.board, newColumn];
    this.board$.next([...this.board]);
  }

  addCard(text: string, columnId: number) {
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

  deleteColumn(columnId: number) {
    this.board = this.board.filter((column: Column) => column.id !== columnId);
    this.board$.next([...this.board]);
  }

  deleteCard(cardId: number, columnId: number) {
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

  changeLike(cardId: number, columnId: number, increase: boolean) {
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

  addComment(columnId: number, cardId: number, text: string) {
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

  deleteComment(columnId: number, itemId: number, commentId: number) {
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
}
