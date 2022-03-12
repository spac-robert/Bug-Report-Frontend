import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageProgrammerComponent } from './homepage-programmer.component';

describe('HomepageProgrammerComponent', () => {
  let component: HomepageProgrammerComponent;
  let fixture: ComponentFixture<HomepageProgrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageProgrammerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageProgrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
