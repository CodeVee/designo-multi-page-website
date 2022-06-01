import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components
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
