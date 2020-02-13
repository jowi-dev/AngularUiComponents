import { Input, OnInit } from "@angular/core";


export abstract class AbstractDropdown implements OnInit{
  @Input() chosen: any = "Pick an option.."
  @Input() dropped: boolean = false;

  @Input() options: any[];


  constructor() { }

  ngOnInit() {
  }

  toggleDrop(){
      if(this.dropped) this.closeDrop();
      else this.openDrop();
  }

  openDrop(){
      this.dropped = true;
  }

  closeDrop(){
      this.dropped = false;
  }

  checkCloseDrop(event){
    if(event.path.some(item => item.tagName=== "ANGULAR-POPPER")) return;
    if(this.dropped){
        this.closeDrop();
    }

  }


  abstract selectOption(event)

  abstract isChosen(option)
}
