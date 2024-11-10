import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-phone',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        [attr.stroke]="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.215-5.669c-1.268-.73-3.009-2.17-4.343-.767"
      />
    </svg>
  `,
  styles: ``,
})
export class PhoneIcon {
  @Input() size = '32';
  @Input() color = 'currentColor';
}