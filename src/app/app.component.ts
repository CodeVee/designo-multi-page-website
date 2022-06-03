import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  contactPage = false;
  private contactUrl = '/contact';
  protected sub!: Subscription;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.sub = this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe(event => this.contactPage = event.url === this.contactUrl)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
