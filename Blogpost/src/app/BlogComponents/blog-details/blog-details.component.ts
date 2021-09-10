/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file blog details which is posted
 */

//Imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Blog } from 'src/app/Models/Blog.model';
import { BlogService } from 'src/app/BlogService/blog.service';

//components for the app declaration
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

//Declaration of class and implementing OnInit method
export class BlogDetailsComponent implements OnInit {

  //initializing variables
  currentBlogTitle: string = "";
  currentBlogContent: string = "";
  currentBlogCategories: string = "";
  currentBlogID: number = -1;
  currentBlogLiked: boolean = false;

  //declaration of blog labels
  currentBlog: Blog = {
    title: "",
    id: -1,
    content: "",
    categories: "",
    liked: false
  };

  //intializing constructor
  constructor(private _activatedRoute: ActivatedRoute, private _blogService: BlogService, private _router: Router) {

    //describing parameters.
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      this.currentBlogID = params["id"];
    });

    this.showBlogDetails();

  }

  //declaration of blog details function
  showBlogDetails() {
    //console.log(this.currentBlogID)
    this.currentBlog = this._blogService.getBlog(this.currentBlogID);
    this.currentBlogID = (this.currentBlog?.id) ?? -1;
    this.currentBlogTitle = (this.currentBlog?.title) ?? "";
    this.currentBlogContent = (this.currentBlog?.content) ?? "";
    this.currentBlogCategories = (this.currentBlog?.categories) ?? "";
    this.currentBlogLiked = (this.currentBlog?.liked) ?? false;
    //console.log(this.currentBlog)
  }

  //On delete function
  onDelete() {
    this._blogService.deleteBlog(this.currentBlog);
    alert("Blog deleted sucessfully");
    this._router.navigateByUrl('/');
  }

  //On Edit function
  onEdit() {
    let editedBlog: Blog = {
      id: this.currentBlogID,
      title: this.currentBlogTitle,
      categories: this.currentBlogCategories,
      content: this.currentBlogContent,
      liked: this.currentBlogLiked
    }
    this._blogService.editBlog(this.currentBlog, editedBlog);
    alert("Blog edited sucessfully");
    this._router.navigateByUrl('/');
  }

  //On like change function
  onLikeChange() {
    //console.log("like change click works")
    this._blogService.toggleLike(this.currentBlogID);
  }

  //OnInit function
  ngOnInit(): void {

  }

}
