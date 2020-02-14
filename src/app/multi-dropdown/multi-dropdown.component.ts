import { Component, Input } from '@angular/core';
import { AbstractDropdown } from '../abstract/dropdown.abstract';
import { AbstractMultiDropdown } from '../abstract/multidropdown.abstract';

@Component({
  selector: 'multi-dropdown',
  templateUrl: '../dropdown/dropdown.component.html',
  styleUrls: ['../dropdown/dropdown.component.scss']
})
export class MultiDropdownComponent extends AbstractMultiDropdown<string>{

  @Input() chosen: string[] = [];
  @Input() isMultiSelect = true;

  filterOptions(filterValue: string): void {
    this.filteredOptions = this.options.filter(item => item.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
  }
}
