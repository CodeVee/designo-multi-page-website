import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Design, Designs, DesignType } from 'src/app/models/design.model';

@Component({
  selector: 'app-design-card',
  templateUrl: './design-card.component.html',
  styleUrls: ['./design-card.component.scss']
})
export class DesignCardComponent implements OnInit {

  @Input() designType!: DesignType;
  design!: Design;

  constructor(private router: Router) {  }
  ngOnInit(): void {
    this.design = Designs.find(d => d.type === this.designType)!;
  }

  navigateToDesign(): void {
    this.router.navigate([this.design.pageUrl]);
  }
}
