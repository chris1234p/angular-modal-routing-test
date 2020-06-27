import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOneComponent } from './number-one.component';

describe('NumberOneComponent', () => {
  let component: NumberOneComponent;
  let fixture: ComponentFixture<NumberOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
