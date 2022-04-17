import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.component.html',
  styleUrls: ['./homepage-admin.component.css']
})
export class HomepageAdminComponent implements OnInit {

  logoutForm!:FormGroup;
  constructor(private router: Router,public authService: AuthService) { 
    
  }

  ngOnInit(): void {
    this.logoutForm =new FormGroup({});
  }

  logout():void{
    this.authService.logout();
    this.router.navigateByUrl('/');
    localStorage.removeItem('userData');
  }
}
