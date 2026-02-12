import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../blog/blog';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private blogService = inject(BlogService);
  latestPosts: BlogPost[] = this.blogService.getPosts().slice(0, 3);
}