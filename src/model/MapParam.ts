import {Location} from "./Location";
export enum MapType {
  View,
  Locate,
  Mark
}

export class MapParam {
  mapType: MapType;
  lng: number;
  lat: number;
  content: string;

  constructor(mapType: MapType, location: Location, content: string) {
    this.mapType = mapType;
    if (location && location.lng && location.lat) {
      this.lng = Number.parseFloat(location.lng);
      this.lat = Number.parseFloat(location.lat);
    } else {
      this.lng = 121.524577;
      this.lat = 31.281003;
    }
    this.content = content;
  }
}

