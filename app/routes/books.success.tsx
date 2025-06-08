import type { Route } from "./+types/books.success";
import { Link } from "react-router";
import { books } from "~/data/books";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Purchase Successful - Thank You! | Your Name" },
    { name: "description", content: "Thank you for your purchase! Your book is ready for download." },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

function RelatedBooks() {
  // Show 3 random books for upselling
  const relatedBooks = books.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Complete Your Collection
        </h2>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Get 25% off any additional book when you purchase within the next 24 hours
        </p>
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
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{book.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-ocean-blue">${Math.round(book.price * 0.75)}</span>
                    <span className="text-sm text-gray-500 line-through">${book.price}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">25% OFF</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link
                    to={`/books/${book.slug}`}
                    className="block w-full bg-ocean-blue text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-ocean-dark transition-colors"
                  >
                    Get 25% Off
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

export default function BooksSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Success Message */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            🎉 Purchase Successful!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Thank you for your purchase! Your book is ready for download. Check your email for the download links.
          </p>

          {/* Next Steps */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-12 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What's Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-ocean-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Check Your Email</h3>
                  <p className="text-gray-600">You'll receive download links for PDF, EPUB, and MOBI formats within 5 minutes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-ocean-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Download Your Book</h3>
                  <p className="text-gray-600">Choose your preferred format and start reading immediately on any device.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-ocean-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Join Our Community</h3>
                  <p className="text-gray-600">Get exclusive updates, bonus content, and connect with other readers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:support@yourname.com"
              className="bg-ocean-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-ocean-dark transition-colors"
            >
              Contact Support
            </a>
            <Link
              to="/books"
              className="bg-white text-ocean-blue px-8 py-4 rounded-lg font-semibold text-lg border-2 border-ocean-blue hover:bg-ocean-blue hover:text-white transition-colors"
            >
              Browse More Books
            </Link>
          </div>

          {/* Social Proof */}
          <div className="bg-ocean-blue rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">You're in Great Company!</h2>
            <p className="text-blue-100 mb-6">
              Join 2,847+ professionals who have transformed their careers with our proven strategies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2,847+</div>
                <div className="text-blue-100">Happy Readers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with Exclusive Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get notified about new books, exclusive discounts, and bonus content delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-blue focus:border-transparent"
              />
              <button className="bg-ocean-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-dark transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              No spam. Unsubscribe anytime. Exclusive content for subscribers only.
            </p>
          </div>
        </div>
      </section>

      {/* Upsell Section */}
      <RelatedBooks />

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Need Help?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Having trouble with your download? We're here to help within 24 hours.
              </p>
              <a
                href="mailto:support@yourname.com"
                className="text-ocean-blue hover:text-ocean-dark font-medium"
              >
                support@yourname.com
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">FAQ</h3>
              <p className="text-gray-600 mb-4">
                Find answers to common questions about downloads, formats, and more.
              </p>
              <Link
                to="/books#faq"
                className="text-ocean-blue hover:text-ocean-dark font-medium"
              >
                View FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
