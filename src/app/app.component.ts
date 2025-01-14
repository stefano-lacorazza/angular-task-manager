import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { find } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: string;

  findName(id: string) {
    const foundName = this.users.find(user => user.id === id)?.name;
    return foundName ? foundName : "";
  }

  onSelectUser(id: string) {
    console.log('User selected:', id);
    this.selectedUser = this.findName(id);

  }
}

