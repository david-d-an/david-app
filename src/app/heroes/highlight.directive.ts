import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() fieldColor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseenter') onMyMouseEnter() {
    this.highlight(this.fieldColor);
  }

  @HostListener('mouseleave') onMyMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
