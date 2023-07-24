import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core"

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirectiv{
    @HostBinding ('class.open') isOpen = false;
   @HostListener ('document:click', ['$event']) toggleOpen (event: Event){
   this.isOpen=this.elRef.nativeElement.contains(event.target)? !this.isOpen : false;
}
constructor(private elRef: ElementRef){}
}

// if you click on a component and you want to check if the click occurred within the component
//  or outside of it, use `this.elRef.nativeElement.contains(event.target)` to determine this. 
//  If the method returns `true`, then the click occurred within the component, and if it returns `false`, 
//  then the click occurred outside of the component.