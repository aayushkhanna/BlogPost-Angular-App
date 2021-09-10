/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file contains constant values
 */
//Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './BlogComponents/home/home.component';
import { CreateNewBlogComponent } from './BlogComponents/create-new-blog/create-new-blog.component';
import { BlogDetailsComponent } from './BlogComponents/blog-details/blog-details.component';

//blog_id:number
//constant values declaration
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: CreateNewBlogComponent },
  { path: 'details', component: BlogDetailsComponent },
  //{ path: {{blog_id}}, component: CreateNewBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
