import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bug-report';

  constructor(private router: Router) {}

  doSmth() {
    var user = this.login();
    if(user.isTester() ) {
      this.router.navigateByUrl('/homepage-tester');
    } else {
      this.router.navigateByUrl('/homepage-programmer');
    }

  }
}
