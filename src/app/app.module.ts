import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LowerBannerComponent } from './components/lower-banner/lower-banner.component';
import { DesignCardComponent } from './components/design-card/design-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    NavBarComponent,
    FooterComponent,
    LowerBannerComponent,
    DesignCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
