import { Component, OnInit, Output } from '@angular/core';
import {Blog} from '../../Models/Blog.model'
import { BlogService } from '../../BlogService/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-blog',
  templateUrl: './create-new-blog.component.html',
  styleUrls: ['./create-new-blog.component.css']
})

export class CreateNewBlogComponent implements OnInit {

  blogTitle:string = "";
  blogCategories:string="";
  blogContent:string="";

  constructor(private _blogService : BlogService, private _router : Router) { }

  ngOnInit(): void {
  }

  onBlogSubmit(){

    console.log("submit click works")

    const blogToAdd = new Blog();
    blogToAdd.title = this.blogTitle;
    blogToAdd.categories = this.blogCategories;
    blogToAdd.content = this.blogContent;
    //console.log(blogToAdd);

    this._blogService.addBlog(blogToAdd);
    alert("Blog published successfully!!")
    this._router.navigateByUrl('/');
  }

}
