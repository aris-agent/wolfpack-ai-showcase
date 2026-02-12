import { Injectable } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // markdown
  date: string;
  author: string;
  image: string;
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
      author: 'Wolfpack Team',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
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
      author: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'The Future of AI in Business',
      slug: 'future-ai-business',
      excerpt: 'Exploring how AI is transforming industries.',
      content: `# The Future of AI in Business

AI is no longer a futuristic concept—it's here, and it's revolutionizing how businesses operate.

## Trends to Watch

- **Automation**: Streamlining operations
- **Personalization**: Tailored customer experiences
- **Predictive Analytics**: Data-driven decisions

Embrace AI to stay ahead.`,
      date: '2024-02-10',
      author: 'AI Strategist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    },
  ];

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug);
  }
}