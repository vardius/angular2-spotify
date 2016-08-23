import {Artist} from "./Artist";
import {Album} from "./Album";

describe('Artist', () => {
    it('has id', () => {
        let artist:Artist = {id: 1, name: 'what ever', genres: [], albums: [new Album()]};
        expect(artist.id).toEqual(1);
    });
    it('has name', () => {
        let artist:Artist = {id: 1, name: 'what ever', genres: [], albums: [new Album()]};
        expect(artist.name).toEqual('what ever');
    });
    it('has genres', () => {
        let artist:Artist = {id: 1, name: 'what ever', genres: ['one', 'two'], albums: [new Album()]};
        expect(artist.genres.length).toEqual(2);
    });
    it('has albums', () => {
        let artist:Artist = {id: 1, name: 'what ever', genres: ['one', 'two'], albums: [new Album()]};
        expect(artist.albums.length).toEqual(1);
    });
});
