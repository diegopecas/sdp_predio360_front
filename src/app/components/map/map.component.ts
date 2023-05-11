import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import esri = __esri;
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import SceneView from '@arcgis/core/views/SceneView.js';
import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = './assets';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  public view: SceneView | undefined;
  private opcionMapaBase = '3d';

  @ViewChild('mapViewNode', { static: true })
  public mapViewEl: ElementRef | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    switch (this.opcionMapaBase) {
      case '2d': //this.cambiarVista2d();
        break;
      case '3d': this.cambiarVista3d();
        break;
    }

  }
/*
  cambiarVista2d() {
    const _map = new Map({
      basemap: 'hybrid',
      ground: 'world-elevation',
    });

    const _mapCenter2d = [-74.11, 4.55];
    this.view = new MapView({
      container: this.mapViewEl?.nativeElement,
      map: _map,
      zoom: 14,
      center: _mapCenter2d,
    });
  }*/

  cambiarVista3d() {
    const _map = new Map({
      basemap: 'hybrid',
      ground: 'world-elevation',
    });

    const _mapCenter3d: esri.PointProperties = {
      x: -74.11,
      y: 4.55,
      z: 15000,
    };

    this.view = new SceneView({
      container: this.mapViewEl?.nativeElement,
      map: _map,
      zoom: 14,
      camera: {
        position: _mapCenter3d,
        tilt: 45,
      },
    });
  }
}
