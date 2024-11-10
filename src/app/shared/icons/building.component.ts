import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-building',
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
        d="M2.25 22h19.5M4 22V6.978c0-1.743 0-2.614.327-3.28A3.06 3.06 0 0 1 5.638 2.34C6.28 2 7.12 2 8.8 2h.4c1.68 0 2.52 0 3.162.34a3.06 3.06 0 0 1 1.311 1.359C14 4.364 14 5.235 14 6.978V22M10 6H8m2 4H8m2 4H8m11.8 8V11.444c0-2.305-.798-3.148-2.925-3.148H14"
      />
    </svg>
  `,
  styles: ``,
})
export class BuildingIcon {
  @Input() size = '32';
  @Input() color = 'currentColor';
}