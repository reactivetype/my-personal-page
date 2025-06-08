import type { Route } from "./+types/projects";
import { useState } from "react";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Your Name | Principal ML Engineer" },
    { name: "description", content: "Explore my research projects and professional work in machine learning, AI, and data science." },
  ];
}

const projects = [
  {
    id: 1,
    title: "Deep Learning Model for Time Series Forecasting",
    category: "Research",
    description: "Developed a novel transformer-based architecture for multi-variate time series prediction with 15% improvement over state-of-the-art baselines. Applied to financial markets and energy consumption forecasting.",
    technologies: ["Python", "PyTorch", "Transformers", "AWS", "Docker"],
    status: "Published",
    year: "2024",
    image: "📈",
  },
  {
    id: 2,
    title: "Computer Vision Pipeline for Manufacturing QC",
    category: "Industry",
    description: "Built an end-to-end computer vision system for automated quality control in manufacturing. Reduced inspection time by 80% while maintaining 99.5% accuracy in defect detection.",
    technologies: ["TensorFlow", "OpenCV", "Kubernetes", "MLflow", "React"],
    status: "Production",
    year: "2023",
    image: "🔍",
  },
  {
    id: 3,
    title: "NLP System for Document Classification",
    category: "Industry",
    description: "Designed and deployed a multi-label document classification system processing 1M+ documents daily. Implemented active learning to continuously improve model performance.",
    technologies: ["BERT", "FastAPI", "PostgreSQL", "Redis", "Elasticsearch"],
    status: "Production",
    year: "2023",
    image: "📄",
  },
  {
    id: 4,
    title: "Federated Learning Framework",
    category: "Research",
    description: "Developed a privacy-preserving federated learning framework for healthcare applications. Enables collaborative model training without sharing sensitive patient data.",
    technologies: ["PyTorch", "gRPC", "Differential Privacy", "Kubernetes"],
    status: "Under Review",
    year: "2024",
    image: "🔒",
  },
  {
    id: 5,
    title: "Real-time Anomaly Detection System",
    category: "Industry",
    description: "Built a streaming anomaly detection system for IoT sensor data. Processes 100K+ events per second with sub-millisecond latency using ensemble methods.",
    technologies: ["Apache Kafka", "Apache Flink", "Scikit-learn", "InfluxDB"],
    status: "Production",
    year: "2022",
    image: "⚡",
  },
  {
    id: 6,
    title: "Multi-modal AI for Medical Imaging",
    category: "Research",
    description: "Research collaboration on combining medical imaging with clinical text data for improved diagnostic accuracy. Achieved 12% improvement in early disease detection.",
    technologies: ["PyTorch", "MONAI", "Transformers", "DICOM", "FHIR"],
    status: "Published",
    year: "2022",
    image: "🏥",
  },
];

const categories = ["All", "Research", "Industry"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Projects & Research
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in machine learning research and industry applications. 
            From cutting-edge research to production-scale systems serving millions of users.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-1 bg-white rounded-lg p-1 shadow-sm max-w-md mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-ocean-blue text-white"
                    : "text-gray-600 hover:text-ocean-blue hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-ocean-blue/10 to-ocean-light/10 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>

                <div className="p-6">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-ocean-blue/10 text-ocean-blue">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>

                  {/* Title */}
                  <Link 
                    to={`/projects/${project.id}`}
                    className="block mb-3"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 hover:text-ocean-blue transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Status & Actions */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.status === 'Production' 
                        ? 'bg-green-100 text-green-800'
                        : project.status === 'Published'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-ocean-blue hover:text-ocean-dark font-medium text-sm transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to discussing new research opportunities, consulting projects, 
            or potential collaborations in machine learning and AI.
          </p>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-ocean-blue hover:bg-ocean-dark text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
