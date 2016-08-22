import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/Artist';
import {Album} from '../../models/Album';

@Component({
    selector: 'artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss'],
    directives: [ROUTER_DIRECTIVES],
})
export class ArtistComponent implements OnInit {
    id:string;
    artist:Artist[];
    albums:Album[];

    constructor(private _spotifyService:SpotifyService,
                private _route:ActivatedRoute) {
    }

    ngOnInit():void {
        this._route.params.map(params => params['id']).subscribe((id) => {
            this._spotifyService.getArtist(id).subscribe(artist => {
                this.artist = artist;
            });

            this._spotifyService.getAlbums(id).subscribe(albums => {
                this.albums = albums.items;
            });
        })
    }
}
