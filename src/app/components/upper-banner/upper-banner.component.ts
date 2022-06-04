import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upper-banner',
  templateUrl: './upper-banner.component.html',
  styleUrls: ['./upper-banner.component.scss']
})
export class UpperBannerComponent {

  @Input() header = '';
  @Input() text = '';
}
