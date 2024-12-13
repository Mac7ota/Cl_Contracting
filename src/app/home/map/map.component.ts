import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MapComponent implements OnInit {

  public isBrowser: boolean = false;

  constructor() {
    this.isBrowser = typeof window !== 'undefined';
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.loadLeaflet().then(() => {
        this.initMap();
      });
    }
  }

  async loadLeaflet() {
    const L = await import('leaflet');
    return L;
  }

  initMap(): void {
    this.loadLeaflet().then(L => {
      const map = L.map('map').setView([42.3601, -71.0589], 12); // Coordenadas de Boston

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    });
  }
}
