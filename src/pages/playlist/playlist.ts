import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CancionesPage} from '../canciones/canciones';
/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  public user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user=navParams.get('user');
    console.log(this.user);
  }
  goToCanciones(playlistID){
  this.navCtrl.push(CancionesPage,{playlistID: playlistID});
}
  ionViewDidLoad() {
   // console.log('ionViewDidLoad PlaylistPage');
  }

}
