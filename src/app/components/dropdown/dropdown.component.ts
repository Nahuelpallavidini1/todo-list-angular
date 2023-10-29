import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() placeholder?: string;
  @Input() options: any[]= [];
  @Input() optionsSelected?: any;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  
  public open: boolean =false;

  public toggleDropdown(){
    this.open = !this.open;
  }

  public selectDropdown(option: any){
    this.onSelect.emit(option);
    this.open = false;
  }
  
}


