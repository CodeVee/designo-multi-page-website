import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lower-banner',
  templateUrl: './lower-banner.component.html',
  styleUrls: ['./lower-banner.component.scss']
})
export class LowerBannerComponent {

  constructor(private router: Router) { }

  contact(): void {
    this.router.navigate(['/contact']);
  }
}
