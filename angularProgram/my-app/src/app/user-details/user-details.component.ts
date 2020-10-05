import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  // allowNewUser = true;
  userName = '';
  constructor() {}

  ngOnInit(): void {
  }
  // onUpdateUserName(event: Event) {
  //   // tslint:disable-next-line: no-angle-bracket-type-assertion
  //   this.userName = (<HTMLInputElement> event.target).value;
  //   if (this.userName !== '') {
  //     this.allowNewUser = false;
  //     } else {
  //       this.allowNewUser = true;
  //     }
  // }
  // onCreateUser() {
  //    this.userName = '';
  //    this.allowNewUser = true;
  // }
}
