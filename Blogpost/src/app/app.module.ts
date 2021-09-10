/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file various file imports and declarations
 */
//Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HomeComponent } from './BlogComponents/home/home.component';
import { CreateNewBlogComponent } from './BlogComponents/create-new-blog/create-new-blog.component';
import {BlogService} from './BlogService/blog.service';
import { BlogDetailsComponent } from './BlogComponents/blog-details/blog-details.component';

@NgModule({
  //declarations
  declarations: [
    AppComponent,
    HomeComponent,
    CreateNewBlogComponent,
    BlogDetailsComponent
  ],

  //Various imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  //front end provider
  providers: [BlogService],
  bootstrap: [AppComponent]
})
//Export app module
export class AppModule { }
