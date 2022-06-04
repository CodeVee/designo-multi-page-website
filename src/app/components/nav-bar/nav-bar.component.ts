import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() darkMode = false;
  active = false;

  constructor(private router: Router) { }

  toggle(): void {
    this.active = !this.active;
  }

  navigate(url: string): void {
    this.active = false;
    this.router.navigate([url]);
  }
}
