import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AlbumsComponent} from "./albums/albums.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "albums", component: AlbumsComponent},
  {path: "albums/:id", component: AlbumDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'albums/:id/album', redirectTo: 'albums', pathMatch: "full"},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
  {path: 'albums/:id/photos/album', redirectTo: 'albums/:id', pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
