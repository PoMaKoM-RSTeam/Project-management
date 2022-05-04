/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { BackendAPIService } from 'src/app/services/backend-api-service.service';

@Component({
  selector: 'space-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  students = [];

  constructor(private reqToApi: BackendAPIService) {}

  ngOnInit(): void {
    this.reqToApi.getUsers().subscribe((data) => {
      console.log(data);
    });

    this.reqToApi.getBoard('8a63303a-d041-4b98-8f96-7f7de9cbea8d').subscribe((data) => {
      console.log(data);
    });
  }
}
