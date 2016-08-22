import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import {SpotifyService} from '../../services/spotify.service';
import {Album} from '../../models/Album';

@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss'],
    directives: [ROUTER_DIRECTIVES],
})
export class AlbumComponent implements OnInit {
    id:string;
    album:Album;

    constructor(private _spotifyService:SpotifyService,
                private _route:ActivatedRoute) {
    }

    ngOnInit():void {
        this._route.params.map(params => params['id']).subscribe((id) => {
            this._spotifyService.getAlbum(id).subscribe(album => {
                this.album = album;
            });
        })
    }
}
