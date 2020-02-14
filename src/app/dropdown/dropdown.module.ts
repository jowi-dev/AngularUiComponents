import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxPopper } from 'angular-popper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MultiDropdownComponent } from '../multi-dropdown/multi-dropdown.component';
import { MultiSubDropdownComponent } from '../multi-sub-dropdown/multi-sub-dropdown.component';
import {SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [DropdownComponent, MultiDropdownComponent, MultiSubDropdownComponent, ],
  imports: [
    CommonModule,
    NgxPopper,
    ClickOutsideModule,
    AngularFontAwesomeModule,
    SweetAlert2Module
  ],
  exports:[
    DropdownComponent,
    MultiDropdownComponent,
    MultiSubDropdownComponent
  ]

})
export class DropdownModule { }
