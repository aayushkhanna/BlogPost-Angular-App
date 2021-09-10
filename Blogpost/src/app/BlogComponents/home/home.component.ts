/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file contains components
 */
//Imports
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../BlogService/blog.service';
import {Blog} from '../../Models/Blog.model'

@Component({
  //selector
  selector: 'app-home',
  //home page url
  templateUrl: './home.component.html',
  //Urls of css files
  styleUrls: ['./home.component.css']
})

//Exporting and implementing
export class HomeComponent implements OnInit {

  //blog object to save blogs
  blogs: Blog[] = [];

  //Initializing constructor
  constructor(private _blogService : BlogService) {
    this.blogs = _blogService.getAllBlogs();
  }

  ngOnInit(): void {
  }
}
