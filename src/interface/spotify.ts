export interface INewReleases {
    albums: IAlbums;
}

export interface IAlbums {
    items: IAlbum[];
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface IAlbum {
    album_type: string;
    artists: IArtist[];
    available_markets: string[];
    external_urls: Externalurls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

interface Image {
    height: number;
    url: string;
    width: number;
}

export interface IArtist {
    external_urls: Externalurls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface Externalurls {
    spotify: string;
}