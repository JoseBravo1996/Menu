import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class PlayServiceProvider {
  public API:string;

  constructor(public http: HttpClient) {
  //  this.API="https://api.deezer.com/";
    this.API="/deezerAPI/";
  }

  getUsers(){
     return this.http.get('https://api.myjson.com/bins/w076v').map(response=> response);
     }

  getUserDetail(userID){
    return this.http.get(this.API+'user/'+userID).map(data=>data);
  }


  getUserPlaylist(userID){
    return this.http.get(this.API+'user/'+userID +'/playlists').map(data=>data);  }
}
