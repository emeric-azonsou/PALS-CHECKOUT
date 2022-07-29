import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allow-cash-out',
  templateUrl: './allow-cash-out.component.html',
  styleUrls: ['./allow-cash-out.component.scss'],
})
export class AllowCashOutComponent implements OnInit {
  setDisplayLoader = false;
  setDisplayText = true;

  constructor() {}

  ngOnInit(): void {}

  onAllowCashout() {
    this.setDisplayLoader = true;
    this.setDisplayText = false;
  }
}
