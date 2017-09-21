import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacesService } from '../../services/places.service';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {
    title: string,
    points: number,
    assignedTo: string
  }[] = [];

  constructor(public navCtrl: NavController, public placesService: PlacesService, public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {

}

openMenu() {
   let actionSheet = this.actionsheetCtrl.create({
     title: 'Actie voor taak',
     cssClass: 'action-sheets-basic-page',
     buttons: [
       {
         text: 'Doing',
         role: 'destructive',
         icon: !this.platform.is('ios') ? 'trash' : null,
         handler: () => {
           console.log('Delete clicked');
         }
       },
       {
         text: 'Verwijder',
         icon: !this.platform.is('ios') ? 'share' : null,
         handler: () => {
           console.log('Share clicked');
         }
       },
       {
         text: 'Annuleer',
         role: 'cancel', // will always sort to be on the bottom
         icon: !this.platform.is('ios') ? 'close' : null,
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
   actionSheet.present();
 }


ionViewWillEnter() {
  this.places = this.placesService.getPlaces();
}


onLoadNewPlace()  {
  this.navCtrl.push(NewPlacePage);
}

}
