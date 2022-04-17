import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Bug } from '../models/Bug';

@Component({
  selector: 'app-homepage-tester',
  templateUrl: './homepage-tester.component.html',
  styleUrls: ['./homepage-tester.component.css']
})
export class HomepageTesterComponent implements OnInit {


  logoutForm!: FormGroup;
  bugs!: Bug[];

  constructor(private router: Router, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.logoutForm = new FormGroup({});

    this.authService.getBugs().subscribe(bugs => {
      this.bugs = bugs;
    });

    
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
    localStorage.removeItem('userData');
  }

}
