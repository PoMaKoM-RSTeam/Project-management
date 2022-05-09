import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/column.model';
import { BoardsAPIService } from '../../../../services/boards-api.service';

@Component({
  selector: 'space-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss'],
})
export class PhaseComponent implements OnInit {
  constructor(private boardsAPIService: BoardsAPIService) {}

  boards: Board[] = [];

  allData: any = [];

  ngOnInit(): void {
    this.boardsAPIService.getAllBoards().subscribe((response) => {
      this.boards = response;
      this.boards.forEach((currentItem) => {
        this.boardsAPIService.getBoardByID(currentItem.id).subscribe((data) => {
          console.log('sdfsdfsdf', data);
          this.allData.push(data);
        });
      });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.allData, event.previousIndex, event.currentIndex);
  }
}
