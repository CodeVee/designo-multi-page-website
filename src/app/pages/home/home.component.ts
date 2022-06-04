import { Component } from '@angular/core';
import { DesignType } from 'src/app/models/design.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  designTypes = [DesignType.WebDesignLarge, DesignType.AppDesign, DesignType.GraphicDesign]
}
