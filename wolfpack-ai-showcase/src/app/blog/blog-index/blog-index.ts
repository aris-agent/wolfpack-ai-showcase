import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../blog';

@Component({
  selector: 'app-blog-index',
  imports: [RouterLink],
  templateUrl: './blog-index.html',
  styleUrl: './blog-index.scss',
})
export class BlogIndex {
  private blogService = inject(BlogService);
  posts: BlogPost[] = this.blogService.getPosts();
}