import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent {

  constructor(private router: Router) { }

  changeLocation(): void {
    this.router.navigate([`/locations`])
  }
 }
