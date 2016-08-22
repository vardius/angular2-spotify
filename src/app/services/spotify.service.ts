import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    constructor(private _http:Http) {

    }

    searchMusic(str:string, type = 'artist') {
        let url = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US`;
        return this._http.get(url).map(res => res.json());
    }

    getArtist(id:string) {
        let url = `https://api.spotify.com/v1/artists/${id}`;
        return this._http.get(url).map(res => res.json());
    }

    getAlbums(artistId:string) {
        let url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
        return this._http.get(url).map(res => res.json());
    }

    getAlbum(id:string) {
        let url = `https://api.spotify.com/v1/albums/${id}`;
        return this._http.get(url).map(res => res.json());
    }
}
