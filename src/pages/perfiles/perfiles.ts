import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlaylistPage} from '../playlist/playlist';
import { PlayServiceProvider } from '../../providers/play-service/play-service';



@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [PlayServiceProvider]
})
export class PerfilesPage {
  public users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public psv:PlayServiceProvider) {
      this.users=[];
  }

  ionViewDidLoad() {
    this.psv.getUsers().subscribe(userIDs=>{
        this.psv.getUserDetail(userIDs).subscribe(user=>{
              this.users.push(user);
        });    
      });
  }
  goToPlayList(user){
    this.navCtrl.push(PlaylistPage,{user:user});
  }
}
