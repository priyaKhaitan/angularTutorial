import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'tested';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }
  ngOnInit() {
  }
onCreateServer() {
  // console.log(document.getElementsByClassName('form-control'));
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server is created now. The New server is' + ' ' + this.serverName;
}
onUpdateServerName(event: Event){
// tslint:disable-next-line: no-angle-bracket-type-assertion
this.serverName = (<HTMLInputElement> event.target).value;
console.log(this.serverName);
}
}
