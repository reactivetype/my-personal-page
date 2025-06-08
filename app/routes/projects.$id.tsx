import type { Route } from "./+types/projects.$id";
import { Link } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Project ${params.id} - Your Name | Principal ML Engineer` },
    { name: "description", content: "Detailed view of a machine learning project." },
  ];
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  status: string;
  year: string;
  image: string;
  githubUrl?: string;
  paperUrl?: string;
  demoUrl?: string;
  results?: Array<{ metric: string; value: string }>;
  challenges?: string[];
  impact?: string;
}

// This would typically come from a database or API
const projects: Project[] = [
  {
    id: 1,
    title: "Deep Learning Model for Time Series Forecasting",
    category: "Research",
    description: "Developed a novel transformer-based architecture for multi-variate time series prediction with 15% improvement over state-of-the-art baselines. Applied to financial markets and energy consumption forecasting.",
    fullDescription: "This project involved developing a cutting-edge transformer architecture specifically designed for multi-variate time series forecasting. The model incorporates temporal attention mechanisms that allow it to capture long-range dependencies in time series data more effectively than traditional approaches.\n\nKey innovations include:\n• Custom positional encoding for temporal data\n• Multi-head attention with temporal masking\n• Hierarchical feature extraction\n• Adaptive learning rate scheduling\n\nThe model was evaluated on multiple benchmark datasets including financial market data, energy consumption patterns, and weather forecasting. Results showed consistent 15% improvement over state-of-the-art baselines across all tested domains.",
    technologies: ["Python", "PyTorch", "Transformers", "AWS", "Docker"],
    status: "Published",
    year: "2024",
    image: "📈",
    githubUrl: "https://github.com/yourname/time-series-transformer",
    paperUrl: "https://arxiv.org/abs/2024.example",
    demoUrl: "https://demo.yourproject.com",
    results: [
      { metric: "RMSE Improvement", value: "15%" },
      { metric: "Training Time", value: "40% faster" },
      { metric: "Model Size", value: "30% smaller" },
    ],
    challenges: [
      "Handling irregular time series with missing data points",
      "Scaling to very long sequences (>10k timesteps)",
      "Balancing model complexity with interpretability",
    ],
    impact: "This work has been adopted by 3 financial institutions for risk modeling and has influenced subsequent research in temporal transformers.",
  },
  {
    id: 2,
    title: "Computer Vision Pipeline for Manufacturing QC",
    category: "Industry",
    description: "Built an end-to-end computer vision system for automated quality control in manufacturing. Reduced inspection time by 80% while maintaining 99.5% accuracy in defect detection.",
    fullDescription: "Developed a comprehensive computer vision pipeline for automated quality control in manufacturing environments. The system processes high-resolution images from production lines in real-time, detecting various types of defects with exceptional accuracy.\n\nSystem Architecture:\n• Multi-stage CNN for defect classification\n• Real-time image preprocessing pipeline\n• Edge deployment with NVIDIA Jetson\n• Integration with existing MES systems\n• Automated reporting and alerting\n\nThe solution handles multiple defect types including scratches, dents, color variations, and dimensional inconsistencies. The system was deployed across 5 manufacturing facilities and processes over 10,000 parts daily.",
    technologies: ["TensorFlow", "OpenCV", "Kubernetes", "MLflow", "React"],
    status: "Production",
    year: "2023",
    image: "🔍",
    githubUrl: "https://github.com/yourname/manufacturing-qc",
    demoUrl: "https://qc-demo.yourcompany.com",
    results: [
      { metric: "Inspection Time Reduction", value: "80%" },
      { metric: "Defect Detection Accuracy", value: "99.5%" },
      { metric: "False Positive Rate", value: "<0.1%" },
      { metric: "Cost Savings", value: "$2M annually" },
    ],
    challenges: [
      "Handling varying lighting conditions across facilities",
      "Training with limited defect samples",
      "Real-time processing requirements (<100ms)",
    ],
    impact: "Deployed across 5 manufacturing facilities, processing 10,000+ parts daily. Reduced quality control costs by $2M annually while improving product quality.",
  },
  {
    id: 3,
    title: "NLP System for Document Classification",
    category: "Industry",
    description: "Designed and deployed a multi-label document classification system processing 1M+ documents daily. Implemented active learning to continuously improve model performance.",
    fullDescription: "Built a scalable NLP system for multi-label document classification handling enterprise-scale document processing. The system uses advanced transformer models with custom fine-tuning for domain-specific classification tasks.\n\nKey Features:\n• Multi-label classification with hierarchical labels\n• Active learning pipeline for continuous improvement\n• Real-time processing with sub-second latency\n• Scalable microservices architecture\n• Comprehensive monitoring and alerting\n\nThe system processes various document types including contracts, invoices, reports, and correspondence. It supports over 50 document categories with hierarchical classification structure.",
    technologies: ["BERT", "FastAPI", "PostgreSQL", "Redis", "Elasticsearch"],
    status: "Production",
    year: "2023",
    image: "📄",
    githubUrl: "https://github.com/yourname/document-classifier",
    results: [
      { metric: "Documents Processed Daily", value: "1M+" },
      { metric: "Classification Accuracy", value: "94.2%" },
      { metric: "Processing Latency", value: "<500ms" },
      { metric: "Active Learning Improvement", value: "8% over 6 months" },
    ],
    challenges: [
      "Handling diverse document formats and layouts",
      "Scaling to 1M+ documents per day",
      "Maintaining accuracy across 50+ categories",
    ],
    impact: "Automated document processing for enterprise clients, reducing manual classification time by 90% and improving accuracy by 25%.",
  },
  {
    id: 4,
    title: "Federated Learning Framework",
    category: "Research",
    description: "Developed a privacy-preserving federated learning framework for healthcare applications. Enables collaborative model training without sharing sensitive patient data.",
    fullDescription: "Created a comprehensive federated learning framework specifically designed for healthcare applications where data privacy is paramount. The system enables multiple healthcare institutions to collaboratively train machine learning models without sharing sensitive patient data.\n\nCore Components:\n• Secure aggregation protocols\n• Differential privacy mechanisms\n• Byzantine fault tolerance\n• Adaptive client selection\n• Comprehensive audit logging\n\nThe framework supports various healthcare use cases including diagnostic imaging, electronic health records analysis, and drug discovery. It has been tested with 10+ healthcare partners across different geographical regions.",
    technologies: ["PyTorch", "gRPC", "Differential Privacy", "Kubernetes"],
    status: "Under Review",
    year: "2024",
    image: "🔒",
    githubUrl: "https://github.com/yourname/federated-healthcare",
    paperUrl: "https://arxiv.org/abs/2024.federated",
    results: [
      { metric: "Privacy Budget", value: "ε = 1.0" },
      { metric: "Model Accuracy", value: "Within 2% of centralized" },
      { metric: "Communication Efficiency", value: "90% reduction" },
      { metric: "Participating Institutions", value: "10+" },
    ],
    challenges: [
      "Ensuring strong privacy guarantees",
      "Handling heterogeneous data distributions",
      "Managing communication overhead",
    ],
    impact: "Enables collaborative healthcare AI research while maintaining strict privacy requirements. Currently being evaluated by FDA for regulatory approval.",
  },
  {
    id: 5,
    title: "Real-time Anomaly Detection System",
    category: "Industry",
    description: "Built a streaming anomaly detection system for IoT sensor data. Processes 100K+ events per second with sub-millisecond latency using ensemble methods.",
    fullDescription: "Developed a high-performance streaming anomaly detection system capable of processing massive volumes of IoT sensor data in real-time. The system uses ensemble machine learning methods to detect various types of anomalies with exceptional speed and accuracy.\n\nArchitecture Highlights:\n• Stream processing with Apache Kafka and Flink\n• Ensemble of online learning algorithms\n• Adaptive thresholding mechanisms\n• Real-time alerting and visualization\n• Horizontal scaling capabilities\n\nThe system monitors industrial equipment, smart city infrastructure, and environmental sensors. It can detect equipment failures, security breaches, and environmental anomalies within milliseconds of occurrence.",
    technologies: ["Apache Kafka", "Apache Flink", "Scikit-learn", "InfluxDB"],
    status: "Production",
    year: "2022",
    image: "⚡",
    githubUrl: "https://github.com/yourname/realtime-anomaly",
    demoUrl: "https://anomaly-demo.yourcompany.com",
    results: [
      { metric: "Events Processed/Second", value: "100K+" },
      { metric: "Detection Latency", value: "<1ms" },
      { metric: "False Positive Rate", value: "<0.5%" },
      { metric: "System Uptime", value: "99.9%" },
    ],
    challenges: [
      "Achieving sub-millisecond latency at scale",
      "Handling concept drift in streaming data",
      "Balancing sensitivity vs. false positives",
    ],
    impact: "Deployed across 50+ industrial facilities, preventing equipment failures and reducing downtime by 40%. Saved $5M in maintenance costs.",
  },
  {
    id: 6,
    title: "Multi-modal AI for Medical Imaging",
    category: "Research",
    description: "Research collaboration on combining medical imaging with clinical text data for improved diagnostic accuracy. Achieved 12% improvement in early disease detection.",
    fullDescription: "Led a collaborative research project combining medical imaging analysis with clinical text data to improve diagnostic accuracy. The multi-modal approach leverages both visual information from medical images and contextual information from clinical notes.\n\nTechnical Approach:\n• Vision transformer for medical image analysis\n• BERT-based clinical text processing\n• Cross-modal attention mechanisms\n• Uncertainty quantification\n• Explainable AI components\n\nThe system was evaluated on multiple medical conditions including cancer detection, cardiovascular disease, and neurological disorders. Results showed significant improvements in early-stage disease detection across all tested conditions.",
    technologies: ["PyTorch", "MONAI", "Transformers", "DICOM", "FHIR"],
    status: "Published",
    year: "2022",
    image: "🏥",
    githubUrl: "https://github.com/yourname/multimodal-medical",
    paperUrl: "https://nature.com/articles/medical-ai-2022",
    results: [
      { metric: "Early Detection Improvement", value: "12%" },
      { metric: "Diagnostic Accuracy", value: "89.3%" },
      { metric: "Radiologist Agreement", value: "94%" },
      { metric: "Processing Time", value: "30 seconds" },
    ],
    challenges: [
      "Integrating heterogeneous data modalities",
      "Ensuring clinical interpretability",
      "Handling missing or incomplete data",
    ],
    impact: "Published in Nature Medicine. Being evaluated for clinical trials at 3 major hospitals. Potential to improve early disease detection for millions of patients.",
  },
];

export async function loader({ params }: Route.LoaderArgs) {
  const projectId = parseInt(params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    throw new Response("Project not found", { status: 404 });
  }
  
  return { project };
}

interface LoaderData {
  project: Project;
}

export default function ProjectDetail({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData as unknown as LoaderData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Breadcrumb Navigation */}
      <nav className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-ocean-blue transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link to="/projects" className="hover:text-ocean-blue transition-colors">
              Projects
            </Link>
            <span>→</span>
            <span className="text-gray-800 font-medium">{project.title}</span>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-6xl">{project.image}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ocean-blue/10 text-ocean-blue">
                        {project.category}
                      </span>
                      <span className="text-gray-500">{project.year}</span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Production' 
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'Published'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h1>
                    <p className="text-lg text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
              )}
              {project.paperUrl && (
                <a
                  href={project.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-ocean-blue hover:bg-ocean-dark text-white font-medium rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Read Paper
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Description */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
              <div className="prose prose-gray max-w-none">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Challenges */}
            {project.challenges && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-ocean-blue rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact */}
            {project.impact && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact & Results</h2>
                <p className="text-gray-600 leading-relaxed">{project.impact}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Metrics */}
            {project.results && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                      <div className="text-sm text-gray-600 mb-1">{result.metric}</div>
                      <div className="text-xl font-bold text-ocean-blue">{result.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-600">Category:</span>
                  <span className="ml-2 font-medium text-gray-800">{project.category}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Year:</span>
                  <span className="ml-2 font-medium text-gray-800">{project.year}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className="ml-2 font-medium text-gray-800">{project.status}</span>
                </div>
              </div>
            </div>

            {/* Back to Projects */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Link
                to="/projects"
                className="inline-flex items-center text-ocean-blue hover:text-ocean-dark font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
