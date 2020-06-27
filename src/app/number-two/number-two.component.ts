import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-two',
  templateUrl: './number-two.component.html',
  styleUrls: ['./number-two.component.scss'],
})
export class NumberTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('hi');
  }
}
