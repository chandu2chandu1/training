import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click') highlightColor() {
    this.el.nativeElement.style.backgroundColor = 'LightCyan';
  }

}
