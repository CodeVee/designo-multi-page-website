import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductType } from './models/product.model';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DesignComponent } from './pages/design/design.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'web-design', component: DesignComponent, data: { page: ProductType.Web } },
  { path: 'app-design', component: DesignComponent, data: { page: ProductType.App } },
  { path: 'graphic-design', component: DesignComponent, data: { page: ProductType.Graphic } },
  { path: 'about', component: AboutComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    HomeComponent, DesignComponent, AboutComponent,
    LocationsComponent, ContactComponent
  ];
 }
