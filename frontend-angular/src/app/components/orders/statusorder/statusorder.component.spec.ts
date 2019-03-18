import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusorderComponent } from './statusorder.component';

describe('StatusorderComponent', () => {
  let component: StatusorderComponent;
  let fixture: ComponentFixture<StatusorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
