import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import { BoardsAPIService } from 'src/app/services/boards-api.service';
// import { UsersAPIService } from 'src/app/services/users-api.service';

@Component({
  selector: 'space-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  students = [];

  // constructor(private reqToUsersApi: UsersAPIService, private reqToBoardsApi: BoardsAPIService) {}
  //
  // ngOnInit(): void {
  //   // this.reqToUsersApi.getAllUsers().subscribe((data) => {
  //   //   console.log(data);
  //   // });
  //
  //   // this.reqToBoardsApi.getBoardByID('8a63303a-d041-4b98-8f96-7f7de9cbea8d').subscribe((data) => {
  //   //   console.log(data);
  //   // });
  //
  //   // this.reqToBoardsApi.getAllBoards().subscribe((data) => console.log(data));
  // }
}
