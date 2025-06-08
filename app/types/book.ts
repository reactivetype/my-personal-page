export interface Author {
  name: string;
  bio: string;
  avatar: string;
  credentials: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
  rating: number;
}

export interface Book {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  author: Author;
  price: number;
  originalPrice?: number;
  gumroadId: string;
  gumroadUrl: string;
  coverImage: string;
  previewUrl?: string;
  sampleChapterUrl?: string;
  tableOfContents: string[];
  testimonials: Testimonial[];
  tags: string[];
  publishedDate: string;
  pageCount: number;
  formats: string[];
  featured: boolean;
  bestseller: boolean;
}

export interface BookBundle {
  id: string;
  slug: string;
  title: string;
  description: string;
  books: Book[];
  price: number;
  originalPrice: number;
  savings: number;
  gumroadId: string;
  gumroadUrl: string;
  coverImage: string;
  featured: boolean;
}
