import {
  Directive,
  HostListener,
  ElementRef,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @Output() onTabChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private el: ElementRef) { }

  @HostListener('scroll') onScroll() {
    const el = this.el.nativeElement;
    
    this.onTabChange.emit(el.scrollTop);
  }
}