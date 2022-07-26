export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divid: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divid), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
