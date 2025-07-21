import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[inView]',
  standalone: true
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  @Output() inView: EventEmitter<boolean> = new EventEmitter<boolean>();
  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.inView.emit(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
