import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() chosen: any = "Pick an option.."
  @Input() dropped: boolean = false;


  @Input() options: any[];

  constructor() { }

  ngOnInit() {
  }

  toggleDrop(){
    this.dropped = !this.dropped;
  }

  closeDrop(){
    this.dropped = false;
  }

  selectOption(event){
    this.chosen = event.target.dataset.value;
  }

  isChosen(option){
    return option == this.chosen;
  }


}

