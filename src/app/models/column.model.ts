export interface Comment {
  id: number;
  text: string;
}

export interface Card {
  id: string;
  text: string;
  like: number;
  description: string;
  comments: Comment[];
}

export interface Column {
  id: string;
  order: number;
  title: string;
  color: string;
  tasks: Card[];
}

export interface User {
  id: string;
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
  tasks: Task[];
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

export interface TaskPost {
  title: string;
  order: number;
  description: string;
  userId: string;
}

export interface IColumnPost {
  title: string;
  order: number;
}
