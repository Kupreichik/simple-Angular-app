import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { time } from '../constants/time.constant';

@Directive({
  selector: '[appPublicationDateColor]',
})
export class PublicationDateColorDirective implements OnInit {
  @Input() appPublicationDateColor: string = '';
  dateStatusColor!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setPublicationDateColor();
  }

  private setPublicationDateColor(): void {
    let publicationTerm = Date.now() - Date.parse(this.appPublicationDateColor);

    if (publicationTerm < time.sevenDays) {
      this.dateStatusColor = '#2F80ED';
    } else if (publicationTerm < time.month) {
      this.dateStatusColor = '#27AE60';
    } else if (publicationTerm < time.sixMonths) {
      this.dateStatusColor = '#F2C94C';
    } else {
      this.dateStatusColor = '#EB5757';
    }

    if (this.element) {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', this.dateStatusColor);
    }
  }
}
