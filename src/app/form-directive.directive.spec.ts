import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[FormDirectiveDirective]'
})
export class FormDirectiveDirective {
  readonly containerEl: HTMLElement = this.el.nativeElement;

  constructor(private el: ElementRef) { }

}