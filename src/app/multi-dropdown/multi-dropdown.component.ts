import { Component, Input } from '@angular/core';
import { AbstractDropdown } from '../abstract/dropdown.abstract';

@Component({
  selector: 'multi-dropdown',
  templateUrl: '../dropdown/dropdown.component.html',
  styleUrls: ['../dropdown/dropdown.component.scss']
})
export class MultiDropdownComponent extends AbstractDropdown<string>{

  @Input() chosen: string[] = [];
  @Input() isMultiSelect = true;

  get hasChoices(): boolean {
    return !!this.chosen.length;
  }
  toggleDrop(event){
    if(event.path.some(item => item.className && item.className.includes("option--chosen"))){
      return;
    }
    else{
      super.toggleDrop();
    }

  }
  selectOption(option: string) :void{
    if(this.chosen.indexOf(option) >= 0) this.chosen = this.chosen.filter(choice => choice !== option);
    else this.chosen.push(option);
  }
  isChosen(option: string) {
    return this.chosen.some(item => item === option);
  }
  filterOptions(filterValue: string): void {
    this.filteredOptions = this.options.filter(item => item.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
  }
  chooseAll(){
    this.chosen = [...new Set([...this.chosen, ...this.filteredOptions])];
  }
  removeAll(){
    this.chosen = [];
  }
  removeChoice(option){
    this.chosen = this.chosen.filter(item => item !== option)
  }
}
