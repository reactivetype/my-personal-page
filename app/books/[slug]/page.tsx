import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBookBySlug, books } from "@/lib/data/books";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: `${book.title} - ${book.subtitle}`,
    description: book.longDescription,
    openGraph: {
      title: book.title,
      description: book.description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Book Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gradient-to-br from-ocean-blue to-ocean-dark rounded-lg aspect-[3/4] flex items-center justify-center text-white mb-4">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📖</div>
                <h2 className="text-2xl font-bold">{book.title}</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 mb-4">
              {book.featured && <Badge variant="default">Featured</Badge>}
              {book.bestseller && <Badge variant="secondary">Bestseller</Badge>}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {book.title}
            </h1>
            <p className="text-xl text-ocean-blue mb-6">{book.subtitle}</p>
            <p className="text-gray-600 mb-6">{book.longDescription}</p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl font-bold text-ocean-blue">
                ${book.price}
              </span>
              {book.originalPrice && (
                <>
                  <span className="text-2xl text-gray-400 line-through">
                    ${book.originalPrice}
                  </span>
                  <span className="text-lg text-green-600 font-medium">
                    Save ${book.originalPrice - book.price}
                  </span>
                </>
              )}
            </div>

            <Button
              asChild
              size="lg"
              className="w-full mb-4 bg-ocean-blue hover:bg-ocean-dark text-lg py-6"
            >
              <a
                href={book.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now - ${book.price}
              </a>
            </Button>

            <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
              <div>
                <div className="font-bold text-gray-900">{book.pageCount}</div>
                <div>Pages</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">{book.formats.length}</div>
                <div>Formats</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">2024</div>
                <div>Published</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
            <CardDescription>
              Everything you need to achieve your goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {book.tableOfContents.map((chapter, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-ocean-blue mr-3">✓</span>
                  <span className="text-gray-700">{chapter}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Testimonials */}
        {book.testimonials.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Readers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {book.testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-ocean-blue/10 flex items-center justify-center text-ocean-blue font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <Card className="bg-ocean-blue text-white">
          <CardContent className="text-center p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals who have accelerated their growth
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <a
                href={book.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Now - ${book.price}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
