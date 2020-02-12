import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() chosen: any = "Pick an option.."
  @Input() dropped: boolean = false;

  rotation : number = 0;


  @Input() options: any[];

  constructor() { }

  ngOnInit() {
  }

  toggleDrop(){
    this.dropped = !this.dropped;
    this.rotation += 45;
  }

  closeDrop(){
    if(this.dropped){
      this.toggleDrop();
    }
  }

  selectOption(event){
    this.chosen = event.target.dataset.value;
  }

  isChosen(option){
    return option == this.chosen;
  }


}

