import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crudv16';
  isSideBarOpened = true;

  toggleSideBar() {
    this.isSideBarOpened = !this.isSideBarOpened;
  }
}
