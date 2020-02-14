import { Component, OnInit, Input } from '@angular/core';
import { AbstractMultiDropdown } from '../abstract/multidropdown.abstract';

@Component({
  selector: 'multi-sub-dropdown',
  templateUrl: '../dropdown/dropdown.component.html',
  styleUrls: ['../dropdown/dropdown.component.scss']
})
export class MultiSubDropdownComponent extends AbstractMultiDropdown<string|subOptions>{
  hasSubMenus = true;
  @Input() chosen: (string | subOptions)[];


  selectOption(option: string | subOptions): void {
    //throw new Error("Method not implemented.");
  }
  isChosen(option: string | subOptions): boolean {
    return this.chosen.some(choice => choice === option)

  }
  get hasChoices(): boolean {
    return !!this.chosen.length
  }
  filterOptions(filterValue: string, options: string[] = null): void {
    this.filteredOptions = this.options.filter(option => {
      if(option instanceof subOptions){
        return this.filterOptions(filterValue, option.options)
      }
    })
  }

  hasSubOptions(option) : boolean{
    return option.category
  }

  getsubOption(option) : subOptions{
    return <subOptions>option;
  }

  toggleViewSubMenu(option){
    option.viewSubMenu = !option.viewSubMenu;
  }
  viewing(option){
    return option.viewSubMenu === true;
  }




}

class subOptions{
  category:string
  options:string[];
  viewSubMenu:boolean = false;
}