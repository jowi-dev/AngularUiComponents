import { Input, OnInit } from "@angular/core";
import { AbstractDropdown } from './dropdown.abstract';


export abstract class AbstractMultiDropdown<T> extends AbstractDropdown<T>{
    abstract chosen: T[];
    abstract filterOptions(filterValue: string): void


    @Input() options: T[];
    @Input() isMultiSelect: boolean = true; //Default to false
    @Input() hasSubMenus: boolean = false //Default to false
    @Input() dropped: boolean = false; //Dev purposes only
    @Input() placeholder: string = "Choose an option.." //Incase we need specific case defaults (Choose account sets.. etc)


    filteredOptions: T[];

    constructor() { super() }

    ngOnInit() {
        this.filteredOptions = this.options;
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
    get hasChoices(): boolean {
        return !!this.chosen.length;
    }
    toggleDrop(event){
        if(event.path.some(item => item.className && item.className.includes("option--chosen"))){
            return;
        }
        else{
            if(this.dropped) this.closeDrop();
            else this.openDrop();
        }

    }
    selectOption(option: T) :void{
        if(this.chosen.indexOf(option) >= 0) this.chosen = this.chosen.filter(choice => choice !== option);
        else this.chosen.push(option);
    }
    isChosen(option: T) {
        return this.chosen.some(item => item === option);
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
