import { Injectable } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // markdown
  date: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'Introducing Wolfpack AI',
      slug: 'introducing-wolfpack-ai',
      excerpt: 'Discover the power of collective AI intelligence.',
      content: `# Introducing Wolfpack AI

Wolfpack AI is a revolutionary platform that harnesses the collective intelligence of multiple AI agents working together.

## Key Features

- **Collaborative Learning**: AIs learn from each other.
- **Scalable Solutions**: Handle complex tasks efficiently.
- **Ethical AI**: Built with human values in mind.

Stay tuned for more updates!`,
      date: '2024-02-01',
      author: 'Wolfpack Team'
    },
    {
      id: 2,
      title: 'How Wolfpack AI Works',
      slug: 'how-wolfpack-ai-works',
      excerpt: 'An in-depth look at the mechanics behind Wolfpack AI.',
      content: `# How Wolfpack AI Works

Wolfpack AI operates on a distributed network of AI agents.

## Architecture

1. **Agent Nodes**: Individual AI units.
2. **Communication Layer**: Secure messaging between agents.
3. **Consensus Mechanism**: Ensuring accurate outputs.

This architecture allows for unprecedented scalability.`,
      date: '2024-02-05',
      author: 'Tech Lead'
    },
    // Add more posts as needed
  ];

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug);
  }
}