import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductType } from './models/product.model';
import { DesignComponent } from './pages/design/design.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'web-design', component: DesignComponent, data: { page: ProductType.Web } },
  { path: 'app-design', component: DesignComponent, data: { page: ProductType.App } },
  { path: 'graphic-design', component: DesignComponent, data: { page: ProductType.Graphic } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [HomeComponent, DesignComponent];
 }
