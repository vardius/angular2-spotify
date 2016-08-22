import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import 'rxjs/add/operator/map';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/Artist';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    directives: [ROUTER_DIRECTIVES]
})
export class SearchComponent {
    searchStr:string;
    searchRes:Artist[];

    constructor(private _spotifyService:SpotifyService) {

    }

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            });
    }
}
