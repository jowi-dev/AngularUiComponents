import { Input, OnInit } from "@angular/core";


export abstract class AbstractDropdown<T> implements OnInit{
    abstract selectOption(option : T) : void;
    abstract isChosen(option : T) : boolean;
    abstract get hasChoices(): boolean;
    abstract filterOptions(filterValue:string):  void;
    abstract chosen;

    @Input() options: T[];
    @Input() isMultiSelect: boolean = false; //Default to false
    @Input() dropped: boolean = false; //Dev purposes only
    @Input() placeholder: string = "Choose an option.." //Incase we need specific case defaults (Choose account sets.. etc)


    filteredOptions: T[];

    constructor() { }

    ngOnInit() {
        this.filteredOptions = this.options;
    }

    toggleDrop(event = null){
        if(this.dropped) this.closeDrop();
        else this.openDrop();
    }

    openDrop(){
        this.dropped = true;
    }

    closeDrop(){
        this.clearFilter();
        this.dropped = false;
    }

    checkCloseDrop(event){
        if(event.path.some(item => item.tagName=== "ANGULAR-POPPER")) {
            return;
        }

        if(this.dropped) {
            this.closeDrop();
        }
    }


    clearFilter(){
        this.filteredOptions = this.options;
    }
}
