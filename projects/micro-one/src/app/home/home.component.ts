import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../../core-lib/src/lib/models/User";
import {AuthenticationService} from "core-lib";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$: Observable<User>;

  constructor(private authService: AuthenticationService, private toastr: ToastrService) {
    this.user$ = authService.user;
  }

  ngOnInit(): void {
  }

  throwError() {
    this.toastr.error('I did not expecting that', 'jesses!', {disableTimeOut: true})
  }

}
