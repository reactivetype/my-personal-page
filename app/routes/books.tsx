import type { Route } from "./+types/books";
import { Link } from "react-router";
import { books, getFeaturedBooks, getBestsellerBooks } from "~/data/books";
import type { Book } from "~/types/book";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Books - Transform Your Career & Business | Your Name" },
    { name: "description", content: "Discover proven strategies for career growth, AI product development, and business success. Digital books with actionable frameworks from a Principal ML Engineer." },
    { name: "keywords", content: "machine learning career, AI products, data science, micro-saas, career growth, digital books" },
    { property: "og:title", content: "Books - Transform Your Career & Business" },
    { property: "og:description", content: "Proven strategies for career growth and business success from a Principal ML Engineer" },
    { property: "og:type", content: "website" },
  ];
}

function BookCard({ book, featured = false }: { book: Book; featured?: boolean }) {
  const savings = book.originalPrice ? book.originalPrice - book.price : 0;
  const discountPercent = book.originalPrice ? Math.round((savings / book.originalPrice) * 100) : 0;

  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${featured ? 'ring-2 ring-ocean-blue' : ''}`}>
      {/* Book Cover */}
      <div className="relative">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-64 object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src = `https://via.placeholder.com/400x600/3B82F6/FFFFFF?text=${encodeURIComponent(book.title)}`;
          }}
        />
        {book.bestseller && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            BESTSELLER
          </div>
        )}
        {featured && (
          <div className="absolute top-3 right-3 bg-ocean-blue text-white px-2 py-1 rounded-full text-xs font-bold">
            FEATURED
          </div>
        )}
        {discountPercent > 0 && (
          <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            {discountPercent}% OFF
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="text-sm text-gray-600 line-clamp-1">{book.subtitle}</p>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {book.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {book.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-ocean-blue">${book.price}</span>
            {book.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${book.originalPrice}</span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            {book.pageCount} pages
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Link
            to={`/books/${book.slug}`}
            className="block w-full bg-ocean-blue text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-ocean-dark transition-colors"
          >
            Learn More
          </Link>
          <a
            href={book.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-100 text-gray-800 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Buy Now - ${book.price}
          </a>
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  const totalBooks = books.length;
  const totalPages = books.reduce((sum, book) => sum + book.pageCount, 0);
  const avgRating = 4.9; // Mock average rating
  const totalReaders = 2847; // Mock total readers

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-ocean-blue mb-2">{totalBooks}</div>
            <div className="text-gray-600">Books Published</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-ocean-blue mb-2">{totalPages.toLocaleString()}</div>
            <div className="text-gray-600">Pages of Content</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-ocean-blue mb-2">{avgRating}</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-ocean-blue mb-2">{totalReaders.toLocaleString()}</div>
            <div className="text-gray-600">Happy Readers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSignup() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ocean-blue">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Get Free Chapter + Exclusive Updates
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 1,000+ professionals getting actionable insights. Get the first chapter of "The ML Career Blueprint" free when you subscribe.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-ocean-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Chapter
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-3">
            No spam. Unsubscribe anytime. Free chapter delivered instantly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Books() {
  const featuredBooks = getFeaturedBooks();
  const bestsellerBooks = getBestsellerBooks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Transform Your Career with
            <span className="text-ocean-blue block">Proven Strategies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the exact frameworks and strategies that helped me go from junior engineer to Principal ML Engineer. 
            Get actionable insights from real-world experience, not theory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="#featured-books"
              className="bg-ocean-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-ocean-dark transition-colors"
            >
              Browse Books
            </Link>
            <a
              href="#newsletter"
              className="bg-white text-ocean-blue px-8 py-4 rounded-lg font-semibold text-lg border-2 border-ocean-blue hover:bg-ocean-blue hover:text-white transition-colors"
            >
              Get Free Chapter
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
              <span>4.9/5 average rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>2,847+ readers worldwide</span>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>30-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      {featuredBooks.length > 0 && (
        <section id="featured-books" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Books</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start with these bestselling guides that have transformed thousands of careers
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} book={book} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <StatsSection />

      {/* All Books */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">All Books</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete collection of practical guides for career growth and business success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <div id="newsletter">
        <NewsletterSignup />
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                What formats are the books available in?
              </h3>
              <p className="text-gray-600">
                All books are available in PDF, EPUB, and MOBI formats. You'll get instant access to all formats after purchase.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact us for a full refund.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Are these books suitable for beginners?
              </h3>
              <p className="text-gray-600">
                Most books are designed for professionals with some experience, but we include foundational concepts where needed. Check individual book descriptions for specific requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do you offer bulk discounts?
              </h3>
              <p className="text-gray-600">
                Yes! Contact us for team purchases of 10+ books. We offer significant discounts for organizations and educational institutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
