import { Component } from '@angular/core';
import { ICollapse } from '../../interfaces/collapse.interface';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  searchLine = '';

  abouts: ICollapse[] = [
    {
      name: 'What is WAPA?',
      content: `It is a cloud-based small group project management software developed by a group of Rs.School students.
       WAPA uses a project management paradigm known as kanban, a method originally popularized by Toyota
        in the 1980s for supply chain management.`,
      active: false,
      disabled: false,
    },
    {
      name: 'What is Kanban?',
      content: `This is a development management method that implements the principle of "just in time"
       and contributes to an even distribution of workload among employees. With this approach, the entire development
        process is transparent to all team members. Tasks are entered into a separate list as they arrive, from where
         each developer can extract the required task.`,
      active: false,
      disabled: false,
    },
    {
      name: 'How to login?',
      content: `To do this, click on the "Log in" button in the lower left corner.
       Then enter a valid username and password, then click on the “Sign in” button.`,
      active: false,
      disabled: false,
    },
    {
      name: 'How to register?',
      content: `To do this, click on the “Log in” button in
       the lower left corner. Then go to the “Sign up” tab, enter your name, username and password.
         The login must be unique, and the password must have uppercase and lowercase letters, 
         numbers, and at least one symbol.`,
      active: true,
      disabled: false,
    },
    {
      name: 'Where can I create a new board?',
      content: `To do this, click on the “board” button on the left in the menu.
       Then in Aside click on “+ Add Board”.
        Write down the name of the new board and then confirm the creation using the "Confirm" button.`,
      active: false,
      disabled: false,
    },
    {
      name: 'How can I create a new column?',
      content: `To do this, click on the “board” button on the left in the menu.
       Then click on the “New Column” button on the top right. Then write down the name of the new column
        and then confirm the creation using the “Confirm” button.`,
      active: false,
      disabled: false,
    },
  ];

  changeSearchLine(search: string): void {
    this.searchLine = search;
  }
}
