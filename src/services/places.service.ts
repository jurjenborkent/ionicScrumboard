export class PlacesService {
private places: {
  title: string,
  points: number,
  assignedTo: string
}[] = [];

addPlace(place: {title: string, points: number, assignedTo: string}) {
  console.log(place);
  this.places.push(place);
}

  getPlaces() {
    return this.places.slice();
  }
}
