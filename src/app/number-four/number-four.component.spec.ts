import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFourComponent } from './number-four.component';

describe('NumberFourComponent', () => {
  let component: NumberFourComponent;
  let fixture: ComponentFixture<NumberFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
