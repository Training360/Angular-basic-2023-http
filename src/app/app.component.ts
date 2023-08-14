import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-directives';

  isSearchBarVisible: boolean = false;

  toggleSearchBar(): void {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }
}
