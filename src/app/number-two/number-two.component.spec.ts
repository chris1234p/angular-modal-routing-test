import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTwoComponent } from './number-two.component';

describe('NumberTwoComponent', () => {
  let component: NumberTwoComponent;
  let fixture: ComponentFixture<NumberTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
