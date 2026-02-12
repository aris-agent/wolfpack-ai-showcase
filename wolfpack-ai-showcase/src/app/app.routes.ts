import { Routes } from '@angular/router';
import { BlogIndex } from './blog/blog-index/blog-index';
import { BlogPostComponent } from './blog/blog-post/blog-post';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'blog', component: BlogIndex },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/blog', pathMatch: 'full' }
];