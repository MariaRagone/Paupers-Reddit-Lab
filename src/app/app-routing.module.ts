import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';



const routes: Routes = [
  //path to url that reaches the devs page
  { path: "list", component: AllPostsComponent},
  { path: "post", component: SinglePostComponent},
  //default
  {path:"", redirectTo: "/post", pathMatch: "full"},
  //page not found
  {path: "**", redirectTo: "/post", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


