import { Directive, ElementRef, HostListener, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';



// ***************************************************
// ***************************************************
// ***************************************************


////    THIS DIRCTIVE IS FOR 10 DIGITMOBILE NUMBER ////


// ***************************************************
// ***************************************************
// ***************************************************




@Directive({
  selector: '[type-mobile]'
})
export class PhoneNumberDirective {
 
  @Output() number_starts_with:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output() number_length:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Input() phone_number:any;
  constructor(private el: ElementRef) {}
 

  @HostListener('keypress', ['$event']) Onkeypress(e:any)
  {
    var k;
    k = e.charCode || e.keyCode;
    this.el.nativeElement.maxLength=10;
    if(this.phone_number)this.phone_number=this.phone_number.toString();
    if(k == 8  || (k >= 48 && k <= 57))
    {
    if(e.target.value=='' && (e.key=='0' || e.key=='1' || e.key=='2' || e.key=='3' || e.key=='4' || e.key=='5') || (this.phone_number && (this.phone_number.length>0 && this.phone_number[0]=='0' || this.phone_number[0]=='1' || this.phone_number[0]=='2' || this.phone_number[0]=='3' || this.phone_number[0]=='4' || this.phone_number[0]=='5' )) )
      {
          this.number_starts_with.emit(false);
      }
      else {this.number_starts_with.emit(true);}
      if (e.which == 32) {
        e.preventDefault();
      }
    }
    return (k == 8  || (k >= 48 && k <= 57))
  }
  @HostListener('focusout', ['$event']) focusout(e:any)
   {
    
    if((this.phone_number.length>0 && this.phone_number[0]=='0' || this.phone_number[0]=='1' || this.phone_number[0]=='2' || this.phone_number[0]=='3' || this.phone_number[0]=='4' || this.phone_number[0]=='5' ) )
      {
          this.number_starts_with.emit(false);
      }
      else {this.number_starts_with.emit(true);}

      if(this.phone_number.length==10)
      {
        this.number_length.emit(true);
      }
      else
      {
        this.number_length.emit(false);
      }
   }
   @HostListener('focusin', ['$event']) focusin(e:any)
   {
      this.number_length.emit(true);
   }
   @HostListener('paste',['$event']) paste(e:any)
  {
    
    // e.preventDefault();
  }

}