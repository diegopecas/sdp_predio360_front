import { Component, ElementRef, ViewChild } from '@angular/core';
import esri = __esri;
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-map2d',
  templateUrl: './map2d.component.html',
  styleUrls: ['./map2d.component.css']
})
export class Map2dComponent {
  public view: MapView | undefined;

  @ViewChild('mapView', { static: true })
  public mapViewEl: ElementRef | undefined;
  
  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();    
  }

  initMap() {
    const _map = new Map({
      basemap: 'hybrid'
    });

    const _mapCenter2d = [-74.11, 4.55];

    this.view = new MapView({
      container: this.mapViewEl?.nativeElement,
      map: _map,
      zoom: 14,
      center: _mapCenter2d
    });
  }
}
