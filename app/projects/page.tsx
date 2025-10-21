import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects - Your Name",
  description: "Explore my portfolio of machine learning and AI projects.",
};

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      title: "ML Model Optimization Platform",
      description: "Built a platform that reduced model training time by 60%",
      tech: ["Python", "PyTorch", "Docker", "Kubernetes"],
    },
    {
      id: "2",
      title: "Computer Vision Pipeline",
      description: "Real-time object detection system processing 1000+ images/second",
      tech: ["TensorFlow", "OpenCV", "AWS", "Redis"],
    },
    {
      id: "3",
      title: "NLP Sentiment Analysis Tool",
      description: "Multi-language sentiment analysis with 95% accuracy",
      tech: ["Transformers", "FastAPI", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Projects
          </h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            A selection of machine learning and AI projects I&apos;ve worked on
          </p>

          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-ocean-blue/10 text-ocean-blue rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
