import { Injectable } from '@angular/core';
import { Blog } from '../Models/Blog.model';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  localStorageBlog: string;

  blogs: Blog[] = [];

  constructor() {
    this.localStorageBlog = localStorage.getItem("Blogs") ?? "";

    if (this.localStorageBlog === "") {
      this.blogs = [];
    } else {
      this.blogs = JSON.parse(this.localStorageBlog);
    }
  }

  getAllBlogs() {
    return this.blogs;
  }

  getBlog(idParam: number) {
    let blogReq: Blog;
    blogReq = (this.blogs.find(blog => {
      return blog.id == idParam
    }) ?? {
      title: "not found", id: -1, categories: "", content: "", liked: false
    });
    
    return blogReq;
  }

  addBlog(paramBlog: Blog) {
    let largest_id: number = 0;
    let blogToAdd: Blog = new Blog();

    this.blogs.forEach(blog => {
      if (largest_id < blog.id) {
        largest_id = blog.id
      }
    });
    largest_id++;

    blogToAdd.id = largest_id;
    blogToAdd.categories = paramBlog.categories;
    blogToAdd.content = paramBlog.content;
    blogToAdd.title = paramBlog.title;
    this.blogs.push(blogToAdd);
    localStorage.setItem("Blogs", JSON.stringify(this.blogs));
  }

  deleteBlog(blogToDelete: Blog) {
    let index = this.blogs.findIndex(eachBlog => eachBlog === blogToDelete);
    this.blogs.splice(index, 1);
    localStorage.setItem("Blogs", JSON.stringify(this.blogs));
  }

  editBlog(oldBlog: Blog, editedBlog: Blog) {
    let index = this.blogs.findIndex(eachBlog => eachBlog === oldBlog);
    this.blogs[index] = editedBlog;
    localStorage.setItem("Blogs",JSON.stringify(this.blogs));
  }

  toggleLike(id: number) {
    let index = this.blogs.findIndex(eachBlog => eachBlog.id === id);
    this.blogs[index].liked = !this.blogs[index].liked;

    //console.log("like toggle");
    localStorage.setItem("Blogs",JSON.stringify(this.blogs));
  }

}
