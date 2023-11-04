import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyCustom]'
})
export class MyCustomDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
