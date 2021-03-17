import { Injectable } from '@angular/core';

@Injectable ({
  providedIn: 'root'
})
export class DataLayerService {
  constructor() {
  }

  setDataLayer(layer) {
    (<any> window).dataLayer = (<any> window).dataLayer || [];
    (<any> window).dataLayer.push (layer);
  }
}
