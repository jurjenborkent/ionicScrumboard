import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';


@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: PlacesService, private navCtrl: NavController) {}

  onAddPlace(place: {title: string, points: number, assignedTo: string}) {
    this.placesService.addPlace(place);
    this.navCtrl.pop();
  }

}
