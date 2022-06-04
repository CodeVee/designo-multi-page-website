import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DesignType } from 'src/app/models/design.model';
import { AppProducts, GraphicProducts, Product, ProductType, WebProducts } from 'src/app/models/product.model';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit, OnDestroy {

  header = '';
  message = '';
  products: Product[] = [];
  designTypes: DesignType[] = [];
  protected sub!: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe(
      data => {
        switch (data.page as ProductType) {
          case ProductType.Web:
            this.header = 'Web Design';
            this.message = 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.';
            this.products = WebProducts;
            this.designTypes = [DesignType.AppDesign, DesignType.GraphicDesign];
            break;
          case ProductType.App:
            this.header = 'App Design';
            this.message = 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.';
            this.products = AppProducts;
            this.designTypes = [DesignType.WebDesign, DesignType.GraphicDesign];
            break;
          case ProductType.Graphic:
            this.header = 'Graphic Design';
            this.message = 'We deliver eye-catching branding materials that are tailored to meet your business objectives.';
            this.products = GraphicProducts;
            this.designTypes = [DesignType.AppDesign, DesignType.WebDesign];
            break;
          default:
            break;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
