export interface Comment {
  id: number;
  text: string;
}

export interface Card {
  id: number;
  text: string;
  like: number;
  comments: Comment[];
}

export interface Column {
  id: number;
  title: string;
  color: string;
  list: Card[];
}

export interface User {
  id: number;
  name: string;
  login: string;
}

export interface Board {
  id: number;
  title: string;
  columns: [];
}

export interface Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}
