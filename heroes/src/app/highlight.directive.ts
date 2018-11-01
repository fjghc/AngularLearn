import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
