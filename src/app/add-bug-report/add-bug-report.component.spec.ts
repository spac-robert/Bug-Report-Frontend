import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBugReportComponent } from './add-bug-report.component';

describe('AddBugReportComponent', () => {
  let component: AddBugReportComponent;
  let fixture: ComponentFixture<AddBugReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBugReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBugReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
