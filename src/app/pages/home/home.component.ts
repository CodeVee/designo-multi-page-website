import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DesignType } from 'src/app/models/design.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  designTypes = [DesignType.WebDesignLarge, DesignType.AppDesign, DesignType.GraphicDesign]

  constructor(private title: Title) { }

  ngOnInit(): void {
      this.title.setTitle('Designo: Home');
  }
}
