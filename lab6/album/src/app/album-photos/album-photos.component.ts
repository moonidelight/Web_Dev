import { Component, OnInit } from '@angular/core';
import {Photo, Album} from "../album-model";
import {AlbumService} from "../album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[];
  album: Album;
  constructor(private albumService: AlbumService,
              private route: ActivatedRoute) {
    this.photos = [];
    this.album = {} as Album;
  }
  ngOnInit():void {
    this.route.paramMap.subscribe((album)=>{
      const id = Number(album.get('id'));
      this.albumService.getPhotos(id).subscribe((photos)=>{
        this.photos = photos;
      })
      }
    )

  }

}
