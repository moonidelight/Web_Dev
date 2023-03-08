import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";
import {Album} from "../album-model";


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.loaded = true;
    this.album = {} as Album;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((album) => {
      const id = Number(album.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) =>{
        this.album = album;
        this.loaded = true;
      })
    })
  }
  UpdatedTitle(newTitle: string){
    this.album.title = newTitle;
    this.albumService.updateAlbum(this.album.id, newTitle).subscribe((album)=>{
      album.title = newTitle;
      this.album = album;
      // console.log(this.album);
      // console.log(album);
    })
  }
}
