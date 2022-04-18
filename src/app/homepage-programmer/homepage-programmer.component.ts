import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-homepage-programmer',
  templateUrl: './homepage-programmer.component.html',
  styleUrls: ['./homepage-programmer.component.css']
})
export class HomepageProgrammerComponent implements OnInit {

  logoutForm!: FormGroup;
  constructor(private router: Router, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.logoutForm = new FormGroup({});
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
    localStorage.removeItem('userData');
  }

  click(): void {
    alert("Solved")
  }
}
