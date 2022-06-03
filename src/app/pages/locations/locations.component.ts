import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { Locations } from 'src/app/models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements AfterViewInit {

  locations = Locations;

  private initMaps(): void {

    this.locations.forEach(location => {
      const map = L.map(location.id, {
        center: [ location.latitude, location.longitude ],
        zoom: 16,
        zoomControl: false
      });

      const tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tile.addTo(map);
    })
  }

  ngAfterViewInit(): void {
    this.initMaps();
  }

}
