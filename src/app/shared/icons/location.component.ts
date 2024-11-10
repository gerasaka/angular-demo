import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-location',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        [attr.stroke]="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path
          d="M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64"
        />
        <path d="M12 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
      </g>
    </svg>
  `,
  styles: ``,
})
export class LocationIcon {
  @Input() size = '32';
  @Input() color = 'currentColor';
}
