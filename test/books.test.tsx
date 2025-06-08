import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Books from '~/routes/books';
import { books, getBookBySlug, getFeaturedBooks, getBestsellerBooks } from '~/data/books';

// Mock component wrapper
function TestWrapper({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

describe('Books Data Functions', () => {
  it('should return all books', () => {
    expect(books).toBeDefined();
    expect(books.length).toBeGreaterThan(0);
    expect(books[0]).toHaveProperty('id');
    expect(books[0]).toHaveProperty('title');
    expect(books[0]).toHaveProperty('price');
  });

  it('should find book by slug', () => {
    const book = getBookBySlug('ml-career-blueprint');
    expect(book).toBeDefined();
    expect(book?.title).toBe('The ML Career Blueprint');
  });

  it('should return undefined for non-existent slug', () => {
    const book = getBookBySlug('non-existent-book');
    expect(book).toBeUndefined();
  });

  it('should return featured books', () => {
    const featuredBooks = getFeaturedBooks();
    expect(featuredBooks.length).toBeGreaterThan(0);
    featuredBooks.forEach(book => {
      expect(book.featured).toBe(true);
    });
  });

  it('should return bestseller books', () => {
    const bestsellerBooks = getBestsellerBooks();
    expect(bestsellerBooks.length).toBeGreaterThan(0);
    bestsellerBooks.forEach(book => {
      expect(book.bestseller).toBe(true);
    });
  });
});

describe('Books Landing Page', () => {
  it('should render the main heading', () => {
    render(
      <TestWrapper>
        <Books />
      </TestWrapper>
    );
    
    expect(screen.getByText(/Transform Your Career with/)).toBeInTheDocument();
    expect(screen.getByText(/Proven Strategies/)).toBeInTheDocument();
  });

  it('should render book cards', () => {
    render(
      <TestWrapper>
        <Books />
      </TestWrapper>
    );
    
    // Should render at least one book title
    expect(screen.getByText('The ML Career Blueprint')).toBeInTheDocument();
  });

  it('should render featured books section', () => {
    render(
      <TestWrapper>
        <Books />
      </TestWrapper>
    );
    
    expect(screen.getByText('Featured Books')).toBeInTheDocument();
  });

  it('should render newsletter signup', () => {
    render(
      <TestWrapper>
        <Books />
      </TestWrapper>
    );
    
    expect(screen.getByText(/Get Free Chapter/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('should render FAQ section', () => {
    render(
      <TestWrapper>
        <Books />
      </TestWrapper>
    );
    
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText(/What formats are the books available in?/)).toBeInTheDocument();
  });

  it('should render stats section', () => {
    render(
      <TestWrapper>
        <Books />
      </TestWrapper>
    );
    
    expect(screen.getByText('Books Published')).toBeInTheDocument();
    expect(screen.getByText('Pages of Content')).toBeInTheDocument();
    expect(screen.getByText('Average Rating')).toBeInTheDocument();
    expect(screen.getByText('Happy Readers')).toBeInTheDocument();
  });
});

describe('Book Data Validation', () => {
  it('should have valid book structure', () => {
    books.forEach(book => {
      // Required fields
      expect(book.id).toBeDefined();
      expect(book.slug).toBeDefined();
      expect(book.title).toBeDefined();
      expect(book.description).toBeDefined();
      expect(book.longDescription).toBeDefined();
      expect(book.price).toBeGreaterThan(0);
      expect(book.gumroadId).toBeDefined();
      expect(book.gumroadUrl).toBeDefined();
      expect(book.coverImage).toBeDefined();
      expect(book.pageCount).toBeGreaterThan(0);
      expect(book.publishedDate).toBeDefined();
      
      // Author structure
      expect(book.author.name).toBeDefined();
      expect(book.author.bio).toBeDefined();
      expect(book.author.credentials).toBeInstanceOf(Array);
      
      // Arrays
      expect(book.tableOfContents).toBeInstanceOf(Array);
      expect(book.testimonials).toBeInstanceOf(Array);
      expect(book.tags).toBeInstanceOf(Array);
      expect(book.formats).toBeInstanceOf(Array);
      
      // Booleans
      expect(typeof book.featured).toBe('boolean');
      expect(typeof book.bestseller).toBe('boolean');
    });
  });

  it('should have unique book IDs', () => {
    const ids = books.map(book => book.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have unique book slugs', () => {
    const slugs = books.map(book => book.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('should have valid pricing', () => {
    books.forEach(book => {
      expect(book.price).toBeGreaterThan(0);
      if (book.originalPrice) {
        expect(book.originalPrice).toBeGreaterThan(book.price);
      }
    });
  });

  it('should have valid testimonials structure', () => {
    books.forEach(book => {
      book.testimonials.forEach(testimonial => {
        expect(testimonial.id).toBeDefined();
        expect(testimonial.name).toBeDefined();
        expect(testimonial.role).toBeDefined();
        expect(testimonial.content).toBeDefined();
        expect(testimonial.rating).toBeGreaterThanOrEqual(1);
        expect(testimonial.rating).toBeLessThanOrEqual(5);
      });
    });
  });
});
