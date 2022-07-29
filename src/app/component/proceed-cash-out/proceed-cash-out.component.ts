import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceed-cash-out',
  templateUrl: './proceed-cash-out.component.html',
  styleUrls: ['./proceed-cash-out.component.scss'],
})
export class ProceedCashOutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProceedCashOut() {
    this.router.navigate(['allow']);
  }
}
