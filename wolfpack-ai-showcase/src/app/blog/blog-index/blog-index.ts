import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../blog';

@Component({
  selector: 'app-blog-index',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-index.html',
  styleUrl: './blog-index.scss',
})
export class BlogIndex {
  private blogService = inject(BlogService);
  posts: BlogPost[] = this.blogService.getPosts();
}