import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceed-cash-out',
  templateUrl: './proceed-cash-out.component.html',
  styleUrls: ['./proceed-cash-out.component.scss'],
})
export class ProceedCashOutComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProceedCashOut() {
    this.router.navigate(['allow']);
  }
}
