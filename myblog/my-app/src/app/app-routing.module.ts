import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FacebookComponent} from "./facebook/facebook.component";
import {HomeComponent} from "./home/home.component";
import {InstagramComponent} from "./instagram/instagram.component";
import {MicrosoftComponent} from "./microsoft/microsoft.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

const routes: Routes = [
  // {path: '', component: FacebookComponent}
  {path: 'facebook-login', component: FacebookComponent},
  {path: 'instagram-login', component: InstagramComponent},
  {path: 'microsoft-home', component: MicrosoftComponent},
  {path: 'todo list',component: TodoListComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
