import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Album, Photo} from "./album-model";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getAlbums (): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }
  getAlbum (id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  updateAlbum (id: number, newTitle: string):Observable<Album> {
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`,{title: newTitle})
  }
  addAlbum (album: Album):Observable<Album> {
    return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums`, album);
  }
  getPhotos (albumId: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  }
  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
}
