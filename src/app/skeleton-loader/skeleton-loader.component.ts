import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  template: `
    <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div>
  `,
  styleUrls: ['./skeleton-loader.component.css']
})
export class SkeletonLoaderComponent {

  @Input() Cwidth: any;
  @Input() Cheight: any;
  @Input() circle: boolean = false;

  constructor() { }

  getMyStyles() {
    const myStyles = {
      'width.px': this.Cwidth ? this.Cwidth : '',
      'height.px': this.Cheight ? this.Cheight : '',
      'border-radius': this.circle ? '50%' : ''
    };
    return myStyles;
  }
}
