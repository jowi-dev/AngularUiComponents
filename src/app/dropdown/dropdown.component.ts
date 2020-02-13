import { Component, Input } from '@angular/core';
import { AbstractDropdown } from '../abstract/dropdown.abstract';


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends AbstractDropdown<string>{
  get hasChoices(): boolean {
    return !!this.chosen;
  }
  @Input() chosen: string;
  selectOption(option: string): void{
    this.chosen = option;
  }

  isChosen(option: string): boolean{
    return option === this.chosen;
  }

  filterOptions(filterValue: string):void{
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(filterValue.toLowerCase()));
  }

}

