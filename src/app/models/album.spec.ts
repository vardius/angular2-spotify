import {Album} from "./Album";

describe('Album', () => {
    it('has id', () => {
        let album:Album = {id: 1, name: 'what ever'};
        expect(album.id).toEqual(1);
    });
});
