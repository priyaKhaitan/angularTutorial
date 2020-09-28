import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }
  successMessage: any;
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.successMessage = 'Success';
  }

}
