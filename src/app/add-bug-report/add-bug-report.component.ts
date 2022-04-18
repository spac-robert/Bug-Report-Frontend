import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BugService } from '../auth/services/bugService/bug.service';
import { BugRequest } from '../dto/bug-request';
@Component({
  selector: 'app-add-bug-report',
  templateUrl: './add-bug-report.component.html',
  styleUrls: ['./add-bug-report.component.css']
})
export class AddBugReportComponent implements OnInit {

  bugReportForm!: FormGroup;
  bugRequest: BugRequest;

  constructor(
    public bugService: BugService,
    private router: Router
  ) {
    this.bugRequest = {
      testerName: '',
      bugName: '',
      description: '',
      solved: false
    }
  }

  ngOnInit(): void {
    this.bugReportForm = new FormGroup({
      testerName: new FormControl('', Validators.required),
      bugName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      solved: new FormControl(false, Validators.required)
    })
  }

  submit(): void {
    debugger;
    this.bugRequest.bugName = this.bugReportForm.get('bugName')!.value;
    this.bugRequest.description = this.bugReportForm.get('description')!.value;
    this.bugRequest.solved = this.bugReportForm.get('solved')!.value;
    this.bugRequest.testerName = localStorage.getItem('email')!

    this.bugService.addBug(this.bugRequest);
  }

}
