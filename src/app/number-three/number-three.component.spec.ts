import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberThreeComponent } from './number-three.component';

describe('NumberThreeComponent', () => {
  let component: NumberThreeComponent;
  let fixture: ComponentFixture<NumberThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
