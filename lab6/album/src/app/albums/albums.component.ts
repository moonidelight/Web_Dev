import { Component , OnInit} from '@angular/core';
import {Album} from "../album-model";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  newAlbum: Album;
  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.newAlbum = {} as Album;
  }
  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }
  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album)=>{
      album.id = this.albums.length + 1
      this.albums.push(album);
      this.newAlbum = {} as Album;
    })
  }
  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe((album)=>{
      for (let i=0;i<this.albums.length;i++) {
        if (this.albums[i].id == id){
          this.albums.splice(i,1);
          console.log(album)
          break;

        }
      }
    })
  }

}
