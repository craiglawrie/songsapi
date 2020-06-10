import { Injectable } from '@nestjs/common';
import { SongListItem, CreateSongRequest } from './models';
import * as cuid from 'cuid';
@Injectable()
export class SongsService {

    private songs: SongListItem[] = [
        { id: cuid(), title: 'Like a Prayer', artist: 'Madonna', album: 'Alive 2' },
        { id: cuid(), title: 'Planet Rock', artist: 'Afrika Bambaata', album: 'Planet Rock Live' },
        { id: cuid(), title: 'Don\'t Believe the Hype', artist: 'Public Enemy', album: 'Fear of a Black Planet' }
    ];


    async getAll() {
        return this.songs;
    }

    async addOne(song: CreateSongRequest) {
        const songToAdd: SongListItem = {
            ...song,
            id: cuid(),
        };
        this.songs = [songToAdd, ...this.songs];
        return songToAdd;
    }
}
