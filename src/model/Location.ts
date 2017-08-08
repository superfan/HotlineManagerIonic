export interface Location {
  type: string;
  lng: string;
  lat: string;
}

export interface LocationEx {
  type: string;
  lng: number;
  lat: number;

  // constructor(location: Location) {
  //   this.lng = location.lng ? Number.parseFloat(location.lng) : 0;
  //   this.lat = location.lat ? Number.parseFloat(location.lat) : 0;
  // }
}
