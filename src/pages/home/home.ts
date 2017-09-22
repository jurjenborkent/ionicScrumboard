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
     title: '',
     cssClass: 'action-sheets-basic-page',
     buttons: [
       {
         text: 'Doing',
         role: 'destructive',
         icon: !this.platform.is('ios') ? 'share' : null,
         handler: () => {
           console.log('Taak naar doing');
         }
       },
       {
         text: 'Verwijder',
         icon: !this.platform.is('ios') ? 'trash' : null,
         handler: () => {
           console.log('Verwijderen');
           console.log(this.places);
           this.places.splice(0,1);
           console.log(this.places);
         }
       },
       {
         text: 'Annuleer',
         role: 'cancel', // will always sort to be on the bottom
         icon: !this.platform.is('ios') ? 'close' : null,
         handler: () => {
           console.log('Actie annuleren');
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
