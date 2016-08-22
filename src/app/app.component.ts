import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SpotifyService} from './services/spotify.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    directives: [NavbarComponent],
    providers: [HTTP_PROVIDERS, SpotifyService]
})
export class AppComponent {
}
