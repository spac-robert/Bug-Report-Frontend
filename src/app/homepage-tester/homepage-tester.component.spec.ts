import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTesterComponent } from './homepage-tester.component';

describe('HomepageTesterComponent', () => {
  let component: HomepageTesterComponent;
  let fixture: ComponentFixture<HomepageTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
