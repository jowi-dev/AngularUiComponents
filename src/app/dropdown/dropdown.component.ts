import { Component, Input } from '@angular/core';
import { AbstractDropdown } from '../abstract/dropdown.abstract';


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends AbstractDropdown{
  filteredOptions: any[] ;
  ngOnInit() {
    this.filteredOptions = this.options;
  }



  selectOption(event){
    this.chosen = event.target.dataset.value;
  }

  isChosen(option){
    return option == this.chosen;
  }

  filterOptions(event){
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(event.target.value.toLowerCase()));
  }

  closeDrop(){
    this.clearFilter();
    super.closeDrop();
  }

  clearFilter(){
    this.filteredOptions = this.options;
  }

}

