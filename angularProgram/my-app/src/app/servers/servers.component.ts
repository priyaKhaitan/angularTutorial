import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  // selector: '[app-servers]',
  // tslint:disable-next-line: component-selector
  selector: '.app-servers',
  // selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
