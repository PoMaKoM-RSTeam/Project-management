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
  id: string;
  title: string;
  color: string;
  list: Card[];
}

export interface User {
  id: number;
  name: string;
  login: string;
  password: string;
}

export interface ILogin {
  login: string;
  password: string;
}

export interface ISignUp {
  name: string;
  login: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
}

export interface ISignUpResponse {
  id: string;
  name: string;
  login: string;
}

export interface ColumnInBoard {
  id: string;
  title: string;
  order: number;
}

export interface Board {
  id: string;
  title: string;
  columns: ColumnInBoard[];
}

export interface BoardEdit {
  title: string;
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

export interface IColumnPost {
  title: string;
  order: number;
}
