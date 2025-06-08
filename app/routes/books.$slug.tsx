import type { Route } from "./+types/books.$slug";
import { Link } from "react-router";
import { getBookBySlug, books } from "~/data/books";
import type { Book } from "~/types/book";

export function meta({ params }: Route.MetaArgs) {
  const book = getBookBySlug(params.slug);
  
  if (!book) {
    return [
      { title: "Book Not Found" },
      { name: "description", content: "The requested book could not be found." },
    ];
  }

  return [
    { title: `${book.title} - ${book.subtitle || 'Digital Book'} | Your Name` },
    { name: "description", content: book.description },
    { name: "keywords", content: book.tags.join(", ") },
    { property: "og:title", content: book.title },
    { property: "og:description", content: book.description },
    { property: "og:image", content: book.coverImage },
    { property: "og:type", content: "book" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: book.title },
    { name: "twitter:description", content: book.description },
    { name: "twitter:image", content: book.coverImage },
  ];
}

function GumroadButton({ book, variant = "primary", size = "lg" }: { 
  book: Book; 
  variant?: "primary" | "secondary"; 
  size?: "sm" | "md" | "lg" 
}) {
  const baseClasses = "font-semibold rounded-lg transition-colors text-center block";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const variantClasses = {
    primary: "bg-ocean-blue text-white hover:bg-ocean-dark",
    secondary: "bg-green-600 text-white hover:bg-green-700"
  };

  return (
    <a
      href={book.gumroadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      Buy Now - ${book.price}
      {book.originalPrice && (
        <span className="ml-2 line-through opacity-75 text-sm">
          ${book.originalPrice}
        </span>
      )}
    </a>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3B82F6&color=fff`}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">
            {testimonial.role}
            {testimonial.company && ` at ${testimonial.company}`}
          </p>
        </div>
        <div className="ml-auto flex text-yellow-400">
          {"★".repeat(testimonial.rating)}
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
}

function RelatedBooks({ currentBook }: { currentBook: Book }) {
  const relatedBooks = books
    .filter(book => 
      book.id !== currentBook.id && 
      book.tags.some(tag => currentBook.tags.includes(tag))
    )
    .slice(0, 3);

  if (relatedBooks.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          You Might Also Like
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/400x600/3B82F6/FFFFFF?text=${encodeURIComponent(book.title)}`;
                }}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-ocean-blue">${book.price}</span>
                  <Link
                    to={`/books/${book.slug}`}
                    className="text-ocean-blue hover:text-ocean-dark font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BookDetail({ params }: Route.ComponentProps) {
  const book = getBookBySlug(params.slug);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Not Found</h1>
          <p className="text-gray-600 mb-8">The book you're looking for doesn't exist.</p>
          <Link
            to="/books"
            className="bg-ocean-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-dark transition-colors"
          >
            Browse All Books
          </Link>
        </div>
      </div>
    );
  }

  const savings = book.originalPrice ? book.originalPrice - book.price : 0;
  const discountPercent = book.originalPrice ? Math.round((savings / book.originalPrice) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="relative">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/400x600/3B82F6/FFFFFF?text=${encodeURIComponent(book.title)}`;
                }}
              />
              {book.bestseller && (
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  BESTSELLER
                </div>
              )}
              {discountPercent > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {discountPercent}% OFF
                </div>
              )}
            </div>

            {/* Book Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{book.title}</h1>
                {book.subtitle && (
                  <p className="text-xl text-gray-600 mb-4">{book.subtitle}</p>
                )}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{book.pageCount} pages</span>
                  <span>•</span>
                  <span>{book.formats.join(", ")}</span>
                  <span>•</span>
                  <span>Published {new Date(book.publishedDate).getFullYear()}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-ocean-blue">${book.price}</span>
                  {book.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-500 line-through">${book.originalPrice}</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        Save ${savings}
                      </span>
                    </>
                  )}
                </div>
                <div className="space-y-3">
                  <GumroadButton book={book} variant="primary" size="lg" />
                  <div className="text-center text-sm text-gray-600">
                    <p>✓ Instant download • ✓ 30-day money-back guarantee • ✓ All formats included</p>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">What You'll Get:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Actionable frameworks you can implement immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Real-world examples and case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Step-by-step implementation guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Lifetime access and updates</span>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-ocean-blue/10 text-ocean-blue text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Book</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed">{book.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What's Inside
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {book.tableOfContents.map((chapter, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="bg-ocean-blue text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-800 font-medium">{chapter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            About the Author
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={book.author.avatar}
                alt={book.author.name}
                className="w-32 h-32 rounded-full mx-auto md:mx-0"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(book.author.name)}&background=3B82F6&color=fff&size=128`;
                }}
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.author.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  {book.author.credentials.map((credential) => (
                    <span
                      key={credential}
                      className="px-3 py-1 bg-ocean-blue/10 text-ocean-blue text-sm rounded-full"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">{book.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {book.testimonials.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              What Readers Are Saying
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {book.testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ocean-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers with proven strategies.
          </p>
          <div className="max-w-md mx-auto">
            <GumroadButton book={book} variant="secondary" size="lg" />
            <p className="text-blue-100 text-sm mt-4">
              30-day money-back guarantee • Instant access • All formats included
            </p>
          </div>
        </div>
      </section>

      {/* Related Books */}
      <RelatedBooks currentBook={book} />

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How do I access the book after purchase?
              </h3>
              <p className="text-gray-600">
                You'll receive an email with download links immediately after purchase. The book is available in PDF, EPUB, and MOBI formats.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Is there a money-back guarantee?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Can I share this book with my team?
              </h3>
              <p className="text-gray-600">
                The book is for personal use. For team licenses, please contact us for bulk pricing options.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do you offer updates to the book?
              </h3>
              <p className="text-gray-600">
                Yes! You'll receive free updates to the book as we add new content and insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
