import { Component, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output() featureSelected:EventEmitter<string> = new EventEmitter<string>();
 //here featureSelected is of type EventEmitter that emits a string value;

 onSelect(feature:string){
this.featureSelected.emit(feature);
 }

//  @HostBinding('class.highlight') get hasHighlight() { return true; }
//  @HostBinding('class.box') get hasBox() { return true }
 
 @HostListener('featureSelected') onClick(eventData: Event) {
}
}