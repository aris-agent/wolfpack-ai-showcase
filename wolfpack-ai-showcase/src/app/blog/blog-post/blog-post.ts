import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { BlogService, BlogPost } from '../blog';

@Component({
  selector: 'app-blog-post',
  imports: [MarkdownModule],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  post: BlogPost | undefined;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.post = this.blogService.getPostBySlug(slug);
    });
  }
}