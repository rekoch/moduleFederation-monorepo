import { Component } from '@angular/core';
import {AuthenticationService} from "core-lib";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {
  }

  login() {
    this.authService.login('Yes it\'s your name', 'guggus');
  }
}
