import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

const routes:Routes = [
    {path: '', component: SearchComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'album/:id', component: AlbumComponent}
];

export const routerProvider = RouterModule.forRoot(routes);
