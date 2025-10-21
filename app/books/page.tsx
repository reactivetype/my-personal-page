import { Metadata } from "next";
import Link from "next/link";
import { books, getFeaturedBooks, getBestsellerBooks } from "@/lib/data/books";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Books - Your Name | ML Career & AI Product Guides",
  description:
    "Discover bestselling guides on machine learning careers, AI product launches, data science interviews, and more. Practical, actionable advice from a Principal ML Engineer.",
};

export default function BooksPage() {
  const featuredBooks = getFeaturedBooks();
  const bestsellerBooks = getBestsellerBooks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Books & Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical, actionable guides to accelerate your ML career, launch AI
            products, and master the skills that matter. Each book is packed with
            real-world examples and proven frameworks.
          </p>
        </div>
      </section>

      {/* All Books */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <Card
                key={book.id}
                className="flex flex-col hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    {book.featured && (
                      <Badge variant="default">Featured</Badge>
                    )}
                    {book.bestseller && (
                      <Badge variant="secondary">Bestseller</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{book.title}</CardTitle>
                  <CardDescription>{book.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-ocean-blue">
                      ${book.price}
                    </span>
                    {book.originalPrice && (
                      <>
                        <span className="text-lg text-gray-400 line-through">
                          ${book.originalPrice}
                        </span>
                        <span className="text-sm text-green-600 font-medium">
                          Save ${book.originalPrice - book.price}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {book.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    asChild
                    className="flex-1 bg-ocean-blue hover:bg-ocean-dark"
                  >
                    <Link href={`/books/${book.slug}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
