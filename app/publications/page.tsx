import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Publications - Your Name",
  description: "Research papers and technical publications in machine learning and AI.",
};

export default function PublicationsPage() {
  const publications = [
    {
      id: "1",
      title: "Efficient Deep Learning for Production Systems",
      venue: "NeurIPS 2023",
      description: "Novel approach to model compression achieving 10x speedup with minimal accuracy loss",
      year: 2023,
    },
    {
      id: "2",
      title: "Scalable Computer Vision Pipelines",
      venue: "CVPR 2023",
      description: "Framework for deploying vision models at scale in real-time applications",
      year: 2023,
    },
    {
      id: "3",
      title: "Transfer Learning for Domain Adaptation",
      venue: "ICML 2022",
      description: "Techniques for improving model performance across different domains",
      year: 2022,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Publications
          </h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Research papers and technical publications in ML and AI
          </p>

          <div className="space-y-6">
            {publications.map((pub) => (
              <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{pub.title}</CardTitle>
                    <span className="text-ocean-blue font-semibold">{pub.year}</span>
                  </div>
                  <CardDescription className="text-base">{pub.venue}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{pub.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
