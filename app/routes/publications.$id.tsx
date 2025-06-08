import type { Route } from "./+types/publications.$id";
import { Link } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Publication ${params.id} - Your Name | Principal ML Engineer` },
    { name: "description", content: "Detailed view of a research publication." },
  ];
}

interface Publication {
  id: number;
  type: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  volume?: string;
  pages?: string;
  doi: string;
  citations: number;
  abstract: string;
  keywords: string[];
  status: string;
  fullAbstract?: string;
  methodology?: string;
  results?: string;
  conclusion?: string;
  paperUrl?: string;
  codeUrl?: string;
  dataUrl?: string;
  slidesUrl?: string;
}

interface Patent {
  id: number;
  title: string;
  inventors: string[];
  patentNumber: string;
  filingDate: string;
  publicationDate?: string;
  assignee: string;
  abstract: string;
  status: string;
  fullDescription?: string;
  claims?: string[];
  patentUrl?: string;
}

// This would typically come from a database or API
const publications: Publication[] = [
  {
    id: 1,
    type: "journal",
    title: "Transformer-Based Multi-Variate Time Series Forecasting with Attention Mechanisms",
    authors: ["Your Name", "Jane Smith", "Robert Johnson"],
    venue: "Journal of Machine Learning Research",
    year: 2024,
    volume: "25",
    pages: "1-28",
    doi: "10.1234/jmlr.2024.001",
    citations: 45,
    abstract: "We propose a novel transformer architecture specifically designed for multi-variate time series forecasting. Our approach incorporates temporal attention mechanisms and achieves state-of-the-art performance on multiple benchmark datasets.",
    keywords: ["Time Series", "Transformers", "Attention", "Forecasting"],
    status: "Published",
    fullAbstract: "Time series forecasting is a critical task in many domains, from financial markets to energy management. Traditional approaches often struggle with long-range dependencies and complex temporal patterns. In this work, we propose a novel transformer architecture specifically designed for multi-variate time series forecasting that addresses these limitations.\n\nOur key contributions include: (1) A custom positional encoding scheme that captures temporal relationships more effectively than standard approaches, (2) A multi-head attention mechanism with temporal masking that prevents information leakage, (3) A hierarchical feature extraction module that captures patterns at multiple time scales, and (4) An adaptive learning rate scheduling algorithm that improves convergence.\n\nWe evaluate our approach on five benchmark datasets spanning financial markets, energy consumption, and weather forecasting. Our method achieves state-of-the-art performance, with an average 15% improvement in RMSE over existing baselines while requiring 40% less training time.",
    methodology: "Our transformer architecture consists of three main components: (1) Temporal Embedding Layer that converts raw time series into high-dimensional representations, (2) Multi-Scale Attention Blocks that capture dependencies at different temporal resolutions, and (3) Forecasting Head that generates predictions with uncertainty estimates.\n\nThe temporal embedding layer uses learnable positional encodings that adapt to the specific characteristics of each time series. The multi-scale attention blocks employ a novel masking strategy that prevents future information leakage while allowing the model to attend to relevant historical patterns. The forecasting head incorporates Monte Carlo dropout to provide uncertainty quantification.",
    results: "We conducted extensive experiments on five benchmark datasets: (1) Electricity Consuming Load (ECL), (2) Exchange Rate (Exchange), (3) Solar Energy (Solar), (4) Traffic (Traffic), and (5) Weather (Weather). Our method consistently outperformed baseline approaches across all datasets.\n\nKey results include: 15.3% average improvement in RMSE, 12.7% improvement in MAE, 40% reduction in training time, and 30% smaller model size compared to the best baseline. The uncertainty estimates provided by our model were well-calibrated, with coverage probabilities close to nominal levels.",
    conclusion: "We have presented a novel transformer architecture for multi-variate time series forecasting that achieves state-of-the-art performance while being computationally efficient. The key innovations include temporal-aware positional encodings, multi-scale attention mechanisms, and uncertainty quantification. Future work will explore applications to streaming data and online learning scenarios.",
    paperUrl: "https://jmlr.org/papers/v25/24-001.html",
    codeUrl: "https://github.com/yourname/time-series-transformer",
    slidesUrl: "https://slides.com/yourname/time-series-transformers"
  },
  {
    id: 2,
    type: "conference",
    title: "Federated Learning with Differential Privacy for Healthcare Applications",
    authors: ["Your Name", "Alice Chen", "Michael Brown", "Sarah Davis"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2024,
    pages: "2156-2167",
    doi: "10.1234/icml.2024.256",
    citations: 23,
    abstract: "This paper presents a federated learning framework that preserves patient privacy while enabling collaborative model training across healthcare institutions. We demonstrate significant improvements in diagnostic accuracy while maintaining strict privacy guarantees.",
    keywords: ["Federated Learning", "Privacy", "Healthcare", "Differential Privacy"],
    status: "Published",
    fullAbstract: "Healthcare data is highly sensitive and subject to strict privacy regulations, making it challenging to develop machine learning models that can benefit from data across multiple institutions. Federated learning offers a promising solution by enabling collaborative model training without sharing raw data. However, existing federated learning approaches may still leak sensitive information through model updates.\n\nIn this work, we present a comprehensive federated learning framework specifically designed for healthcare applications that incorporates differential privacy mechanisms to provide formal privacy guarantees. Our approach enables multiple healthcare institutions to collaboratively train diagnostic models while ensuring that individual patient information remains private.\n\nWe demonstrate the effectiveness of our framework on three healthcare tasks: medical image classification, electronic health record analysis, and drug discovery. Our results show that federated learning with differential privacy can achieve diagnostic accuracy within 2% of centralized training while providing strong privacy guarantees.",
    methodology: "Our federated learning framework consists of four main components: (1) Secure Aggregation Protocol that prevents the central server from accessing individual model updates, (2) Differential Privacy Mechanism that adds calibrated noise to model updates, (3) Adaptive Client Selection that optimizes participation based on data quality and privacy budget, and (4) Byzantine Fault Tolerance that handles malicious or faulty participants.\n\nThe differential privacy mechanism uses the Gaussian mechanism with privacy budget allocation across training rounds. We employ moment accountant techniques to track privacy loss and ensure that the total privacy budget is not exceeded. The adaptive client selection algorithm balances model performance with privacy constraints by selecting participants that maximize utility while minimizing privacy cost.",
    results: "We evaluated our framework on three healthcare datasets: (1) Chest X-ray classification with 10 hospitals, (2) Electronic health record analysis with 15 clinics, and (3) Drug discovery with 8 pharmaceutical companies. The federated models achieved 94.2% accuracy on chest X-ray classification (vs. 96.1% centralized), 89.7% on EHR analysis (vs. 91.3% centralized), and identified 87% of known drug-target interactions (vs. 92% centralized).\n\nPrivacy analysis showed that our framework provides (ε=1.0, δ=10^-5)-differential privacy while maintaining high utility. Communication costs were reduced by 90% compared to naive federated learning through our adaptive client selection and model compression techniques.",
    conclusion: "We have demonstrated that federated learning with differential privacy can enable collaborative healthcare AI while preserving patient privacy. Our framework provides formal privacy guarantees and achieves performance close to centralized training. This work opens new possibilities for privacy-preserving healthcare research and has the potential to accelerate medical AI development.",
    paperUrl: "https://proceedings.mlr.press/v202/yourname24a.html",
    codeUrl: "https://github.com/yourname/federated-healthcare",
    slidesUrl: "https://icml.cc/media/icml-2024/Slides/yourname.pdf"
  },
  {
    id: 3,
    type: "journal",
    title: "Multi-Modal Deep Learning for Medical Image Analysis",
    authors: ["Your Name", "David Wilson", "Emily Rodriguez"],
    venue: "Nature Machine Intelligence",
    year: 2022,
    volume: "4",
    pages: "892-905",
    doi: "10.1038/s42256-022-00567-8",
    citations: 127,
    abstract: "We develop a multi-modal deep learning approach that combines medical imaging with clinical text data for improved diagnostic accuracy. Our method shows 12% improvement in early disease detection across multiple conditions.",
    keywords: ["Medical Imaging", "Multi-Modal", "Deep Learning", "Diagnostics"],
    status: "Published",
    fullAbstract: "Medical diagnosis typically involves integrating information from multiple sources, including medical images, clinical notes, laboratory results, and patient history. However, most machine learning approaches for medical diagnosis focus on single modalities, potentially missing important complementary information.\n\nIn this work, we develop a multi-modal deep learning framework that combines medical imaging with clinical text data to improve diagnostic accuracy. Our approach uses vision transformers for image analysis and BERT-based models for text processing, with a novel cross-modal attention mechanism that enables effective information fusion.\n\nWe evaluate our approach on three medical conditions: lung cancer detection, cardiovascular disease diagnosis, and neurological disorder classification. Our multi-modal approach achieves significant improvements over single-modal baselines, with an average 12% improvement in early disease detection accuracy.",
    methodology: "Our multi-modal framework consists of three main components: (1) Vision Transformer for medical image analysis that processes radiological images and extracts visual features, (2) Clinical BERT for text processing that analyzes clinical notes and extracts semantic features, and (3) Cross-Modal Fusion Network that combines visual and textual information using attention mechanisms.\n\nThe vision transformer is pre-trained on a large corpus of medical images and fine-tuned for specific diagnostic tasks. The clinical BERT model is trained on clinical text data and captures medical terminology and relationships. The cross-modal fusion network uses multi-head attention to identify relevant correspondences between visual and textual features.",
    results: "We conducted experiments on three large-scale medical datasets: (1) Lung cancer detection using chest CT scans and radiology reports (50,000 cases), (2) Cardiovascular disease diagnosis using echocardiograms and clinical notes (30,000 cases), and (3) Neurological disorder classification using brain MRI and clinical assessments (25,000 cases).\n\nOur multi-modal approach achieved: 94.3% accuracy for lung cancer detection (vs. 84.1% image-only), 91.7% for cardiovascular disease (vs. 82.4% image-only), and 88.9% for neurological disorders (vs. 79.2% image-only). The improvements were particularly pronounced for early-stage diseases where clinical context is crucial for accurate diagnosis.",
    conclusion: "We have demonstrated that multi-modal deep learning can significantly improve medical diagnostic accuracy by effectively combining visual and textual information. Our approach shows particular promise for early disease detection where subtle imaging findings must be interpreted in clinical context. This work has important implications for computer-aided diagnosis and could help improve patient outcomes through earlier and more accurate detection of diseases.",
    paperUrl: "https://www.nature.com/articles/s42256-022-00567-8",
    codeUrl: "https://github.com/yourname/multimodal-medical",
    dataUrl: "https://physionet.org/content/multimodal-medical/1.0.0/"
  },
  {
    id: 4,
    type: "conference",
    title: "Real-Time Anomaly Detection in IoT Sensor Networks Using Ensemble Methods",
    authors: ["Your Name", "Kevin Lee", "Maria Garcia"],
    venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    year: 2022,
    pages: "1234-1243",
    doi: "10.1145/3534678.3539123",
    citations: 89,
    abstract: "We present a scalable ensemble-based approach for real-time anomaly detection in IoT sensor networks. Our system processes over 100K events per second with sub-millisecond latency while maintaining high accuracy.",
    keywords: ["Anomaly Detection", "IoT", "Real-time", "Ensemble Methods"],
    status: "Published",
    fullAbstract: "The proliferation of IoT devices has created massive streams of sensor data that require real-time monitoring for anomalies. Traditional anomaly detection methods often struggle with the scale, velocity, and heterogeneity of IoT data streams. Moreover, the need for real-time processing with sub-millisecond latency poses additional challenges.\n\nIn this work, we present a scalable ensemble-based approach for real-time anomaly detection in IoT sensor networks. Our system combines multiple online learning algorithms in an adaptive ensemble that can handle concept drift and maintain high accuracy while processing over 100,000 events per second.\n\nWe evaluate our approach on real-world IoT datasets from smart cities, industrial monitoring, and environmental sensing applications. Our system achieves sub-millisecond latency while maintaining detection accuracy above 95% and false positive rates below 0.5%.",
    methodology: "Our ensemble approach combines five online learning algorithms: (1) Isolation Forest for outlier detection, (2) One-Class SVM for boundary-based detection, (3) LSTM Autoencoder for temporal pattern analysis, (4) Statistical Process Control for threshold-based detection, and (5) Clustering-based detection for density analysis.\n\nThe ensemble uses a dynamic weighting scheme that adapts to changing data characteristics and concept drift. We employ a sliding window approach for model updates and use Apache Kafka for stream processing and Apache Flink for real-time computation. The system is designed for horizontal scaling across multiple nodes.",
    results: "We evaluated our system on three real-world IoT datasets: (1) Smart city traffic sensors (500K sensors, 1M events/hour), (2) Industrial equipment monitoring (10K sensors, 5M events/hour), and (3) Environmental monitoring network (50K sensors, 2M events/hour).\n\nPerformance results: 99.7% detection accuracy, 0.3% false positive rate, 0.8ms average latency, 150K events/second throughput per node, 99.9% system uptime. The ensemble approach outperformed individual algorithms by 8-15% in detection accuracy while maintaining real-time performance requirements.",
    conclusion: "We have presented a scalable ensemble-based system for real-time anomaly detection in IoT sensor networks that achieves high accuracy while meeting strict latency requirements. The adaptive ensemble approach effectively handles concept drift and heterogeneous data streams. This work demonstrates the feasibility of real-time anomaly detection at IoT scale and has important applications in smart cities, industrial monitoring, and cybersecurity.",
    paperUrl: "https://dl.acm.org/doi/10.1145/3534678.3539123",
    codeUrl: "https://github.com/yourname/realtime-anomaly-detection",
    slidesUrl: "https://kdd.org/kdd2022/slides/yourname-anomaly.pdf"
  },
  {
    id: 5,
    type: "preprint",
    title: "Large Language Models for Code Generation: A Comprehensive Evaluation",
    authors: ["Your Name", "Lisa Wang", "James Thompson"],
    venue: "arXiv preprint",
    year: 2024,
    doi: "arXiv:2024.1234.5678",
    citations: 12,
    abstract: "This work provides a comprehensive evaluation of large language models for automated code generation across multiple programming languages and domains. We introduce new benchmarks and evaluation metrics.",
    keywords: ["Large Language Models", "Code Generation", "Evaluation", "Benchmarks"],
    status: "Under Review",
    fullAbstract: "Large language models (LLMs) have shown remarkable capabilities in code generation, but comprehensive evaluation across diverse programming tasks and languages remains limited. Existing benchmarks often focus on simple algorithmic problems and may not reflect real-world software development challenges.\n\nIn this work, we provide a comprehensive evaluation of state-of-the-art LLMs for automated code generation across multiple programming languages, domains, and complexity levels. We introduce CodeEval-Pro, a new benchmark suite that includes realistic software development tasks, and propose novel evaluation metrics that consider code quality, efficiency, and maintainability.\n\nOur evaluation covers 12 LLMs across 8 programming languages and 6 domains, providing insights into model capabilities, limitations, and best practices for code generation applications.",
    methodology: "We developed CodeEval-Pro, a comprehensive benchmark suite consisting of 2,000 programming tasks across 8 languages (Python, Java, C++, JavaScript, Go, Rust, Swift, Kotlin) and 6 domains (algorithms, data structures, web development, machine learning, systems programming, mobile development).\n\nOur evaluation methodology includes: (1) Functional Correctness using automated testing, (2) Code Quality assessment using static analysis tools, (3) Efficiency Analysis measuring time and space complexity, (4) Maintainability Metrics including readability and documentation, and (5) Security Analysis identifying potential vulnerabilities.\n\nWe evaluated 12 LLMs including GPT-4, Claude, Gemini, CodeT5, and specialized code models. Each model generated solutions for all benchmark tasks, and we applied our comprehensive evaluation framework to assess performance across multiple dimensions.",
    results: "Key findings from our evaluation: (1) GPT-4 achieved the highest overall performance with 78.3% functional correctness, (2) Specialized code models outperformed general LLMs on domain-specific tasks, (3) Performance varied significantly across programming languages, with Python showing the best results (82.1% correctness) and Rust the lowest (61.4%), (4) Code quality metrics revealed that LLMs often generate functionally correct but poorly structured code, (5) Security analysis identified vulnerabilities in 23% of generated code samples.\n\nDomain-specific results showed that LLMs performed best on algorithmic tasks (85.2% correctness) and struggled with systems programming (58.7% correctness). The evaluation revealed significant gaps between functional correctness and production-ready code quality.",
    conclusion: "Our comprehensive evaluation reveals both the potential and limitations of current LLMs for code generation. While models achieve impressive functional correctness on many tasks, significant challenges remain in generating high-quality, maintainable, and secure code. The CodeEval-Pro benchmark and evaluation framework provide a foundation for future research and development in automated code generation.",
    paperUrl: "https://arxiv.org/abs/2024.1234.5678",
    codeUrl: "https://github.com/yourname/codeeval-pro",
    dataUrl: "https://huggingface.co/datasets/yourname/codeeval-pro"
  }
];

const patents: Patent[] = [
  {
    id: 1,
    title: "System and Method for Automated Quality Control Using Computer Vision",
    inventors: ["Your Name", "John Doe", "Jane Smith"],
    patentNumber: "US11,234,567 B2",
    filingDate: "2021-03-15",
    publicationDate: "2023-01-24",
    assignee: "Tech Corporation Inc.",
    abstract: "A computer vision system for automated quality control in manufacturing environments. The system uses deep learning models to detect defects with high accuracy and speed.",
    status: "Granted",
    fullDescription: "The present invention relates to automated quality control systems for manufacturing environments, and more particularly to a computer vision system that uses deep learning models to detect defects in manufactured products with high accuracy and speed.\n\nManufacturing quality control traditionally relies on human inspection, which is time-consuming, subjective, and prone to errors. Automated systems using traditional computer vision techniques often struggle with complex defect patterns and varying lighting conditions.\n\nThe disclosed system addresses these limitations by employing a multi-stage deep learning pipeline that can detect various types of defects including scratches, dents, color variations, and dimensional inconsistencies. The system processes high-resolution images in real-time and provides detailed defect classification and localization.",
    claims: [
      "A computer vision system for automated quality control comprising: a) an image acquisition module for capturing high-resolution images of manufactured products, b) a preprocessing module for normalizing image quality and lighting conditions, c) a deep learning inference engine for defect detection and classification, d) a post-processing module for defect localization and severity assessment, and e) a reporting module for generating quality control reports.",
      "The system of claim 1, wherein the deep learning inference engine comprises a convolutional neural network trained on a dataset of labeled defect images.",
      "The system of claim 1, wherein the preprocessing module includes adaptive histogram equalization and noise reduction algorithms.",
      "The system of claim 1, wherein the system processes images with sub-100ms latency for real-time quality control applications."
    ],
    patentUrl: "https://patents.uspto.gov/patent/11234567"
  },
  {
    id: 2,
    title: "Privacy-Preserving Machine Learning Training System",
    inventors: ["Your Name", "Alice Johnson", "Bob Wilson"],
    patentNumber: "US Application 17/987,654",
    filingDate: "2023-11-15",
    assignee: "AI Research Labs",
    abstract: "A federated learning system that enables collaborative model training while preserving data privacy through advanced cryptographic techniques and differential privacy.",
    status: "Pending",
    fullDescription: "The present invention relates to privacy-preserving machine learning systems, and more particularly to a federated learning framework that enables multiple parties to collaboratively train machine learning models without sharing sensitive data.\n\nTraditional machine learning requires centralized data collection, which raises privacy concerns and may violate data protection regulations. Existing federated learning approaches may still leak sensitive information through model updates or gradient sharing.\n\nThe disclosed system provides a comprehensive solution that combines secure multi-party computation, differential privacy, and homomorphic encryption to enable truly private collaborative learning. The system is particularly suited for healthcare, financial, and other privacy-sensitive applications.",
    claims: [
      "A privacy-preserving machine learning system comprising: a) a secure aggregation protocol for combining model updates without revealing individual contributions, b) a differential privacy mechanism for adding calibrated noise to model parameters, c) a homomorphic encryption module for performing computations on encrypted data, d) a byzantine fault tolerance mechanism for handling malicious participants, and e) a privacy budget management system for tracking and controlling privacy loss.",
      "The system of claim 1, wherein the differential privacy mechanism uses the Gaussian mechanism with moment accountant for privacy budget tracking.",
      "The system of claim 1, wherein the secure aggregation protocol employs threshold cryptography to prevent single points of failure.",
      "The system of claim 1, wherein the system provides (ε, δ)-differential privacy guarantees with configurable privacy parameters."
    ]
  }
];

export async function loader({ params }: Route.LoaderArgs) {
  const publicationId = parseInt(params.id);
  
  // Check publications first
  const publication = publications.find(p => p.id === publicationId);
  if (publication) {
    return { publication, type: 'publication' };
  }
  
  // Check patents
  const patent = patents.find(p => p.id === publicationId);
  if (patent) {
    return { patent, type: 'patent' };
  }
  
  throw new Response("Publication not found", { status: 404 });
}

interface LoaderData {
  publication?: Publication;
  patent?: Patent;
  type: 'publication' | 'patent';
}

export default function PublicationDetail({ loaderData }: Route.ComponentProps) {
  const { publication, patent, type } = loaderData as unknown as LoaderData;
  const item = publication || patent;

  if (!item) {
    return <div>Publication not found</div>;
  }

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
            <Link to="/publications" className="hover:text-ocean-blue transition-colors">
              Publications
            </Link>
            <span>→</span>
            <span className="text-gray-800 font-medium">{item.title}</span>
          </div>
        </div>
      </nav>

      {/* Publication Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  type === 'publication' 
                    ? publication?.type === 'journal' 
                      ? 'bg-blue-100 text-blue-800'
                      : publication?.type === 'conference'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {type === 'publication' 
                    ? publication?.type === 'journal' ? 'Journal' 
                      : publication?.type === 'conference' ? 'Conference' 
                      : 'Preprint'
                    : 'Patent'
                  }
                </span>
                {type === 'publication' && (
                  <>
                    <span className="text-gray-500">{publication?.year}</span>
                    <span className="text-gray-500">• {publication?.citations} citations</span>
                  </>
                )}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === 'Published' || item.status === 'Granted'
                    ? 'bg-green-100 text-green-800'
                    : item.status === 'Under Review' || item.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {item.status}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {item.title}
              </h1>
              
              {type === 'publication' && publication && (
                <>
                  <p className="text-lg text-gray-600 mb-3">
                    {publication.authors.join(", ")}
                  </p>
                  <p className="text-ocean-blue font-medium mb-4">
                    {publication.venue} {publication.volume && `${publication.volume}`} {publication.pages && `(${publication.pages})`}
                  </p>
                </>
              )}
              
              {type === 'patent' && patent && (
                <>
                  <p className="text-lg text-gray-600 mb-3">
                    Inventors: {patent.inventors.join(", ")}
                  </p>
                  <p className="text-ocean-blue font-medium mb-4">
                    {patent.patentNumber} • Assignee: {patent.assignee}
                  </p>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {type === 'publication' && publication?.paperUrl && (
                <a
                  href={publication.paperUrl}
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
              
              {type === 'patent' && patent?.patentUrl && (
                <a
                  href={patent.patentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-ocean-blue hover:bg-ocean-dark text-white font-medium rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Patent
                </a>
              )}
              
              {type === 'publication' && publication?.codeUrl && (
                <a
                  href={publication.codeUrl}
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
              
              {type === 'publication' && publication?.slidesUrl && (
                <a
                  href={publication.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V2a1 1 0 011-1z" />
                  </svg>
                  View Slides
                </a>
              )}
              
              {type === 'publication' && publication?.dataUrl && (
                <a
                  href={publication.dataUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  View Data
                </a>
              )}
            </div>

            {/* Keywords/Claims */}
            {type === 'publication' && publication?.keywords && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Abstract/Description */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {type === 'publication' ? 'Abstract' : 'Description'}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {type === 'publication' && publication?.fullAbstract 
                    ? publication.fullAbstract.split('\n\n').map((paragraph, index) => (
                        <span key={index} className="block mb-4">
                          {paragraph}
                        </span>
                      ))
                    : type === 'patent' && patent?.fullDescription
                    ? patent.fullDescription.split('\n\n').map((paragraph, index) => (
                        <span key={index} className="block mb-4">
                          {paragraph}
                        </span>
                      ))
                    : item.abstract
                  }
                </p>
              </div>
            </div>

            {/* Methodology */}
            {type === 'publication' && publication?.methodology && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Methodology</h2>
                <div className="prose prose-gray max-w-none">
                  {publication.methodology.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {type === 'publication' && publication?.results && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
                <div className="prose prose-gray max-w-none">
                  {publication.results.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion */}
            {type === 'publication' && publication?.conclusion && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
                <p className="text-gray-600 leading-relaxed">{publication.conclusion}</p>
              </div>
            )}

            {/* Patent Claims */}
            {type === 'patent' && patent?.claims && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Claims</h2>
                <ol className="space-y-4">
                  {patent.claims.map((claim, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-ocean-blue text-white text-sm rounded-full flex items-center justify-center mr-3 mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 leading-relaxed">{claim}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publication Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {type === 'publication' ? 'Publication Details' : 'Patent Details'}
              </h3>
              <div className="space-y-3">
                {type === 'publication' && publication && (
                  <>
                    <div>
                      <span className="text-sm text-gray-600">Type:</span>
                      <span className="ml-2 font-medium text-gray-800 capitalize">{publication.type}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Year:</span>
                      <span className="ml-2 font-medium text-gray-800">{publication.year}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Citations:</span>
                      <span className="ml-2 font-medium text-gray-800">{publication.citations}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">DOI:</span>
                      <span className="ml-2 font-medium text-gray-800 break-all">{publication.doi}</span>
                    </div>
                  </>
                )}
                
                {type === 'patent' && patent && (
                  <>
                    <div>
                      <span className="text-sm text-gray-600">Patent Number:</span>
                      <span className="ml-2 font-medium text-gray-800">{patent.patentNumber}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Filing Date:</span>
                      <span className="ml-2 font-medium text-gray-800">{patent.filingDate}</span>
                    </div>
                    {patent.publicationDate && (
                      <div>
                        <span className="text-sm text-gray-600">Publication Date:</span>
                        <span className="ml-2 font-medium text-gray-800">{patent.publicationDate}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-sm text-gray-600">Assignee:</span>
                      <span className="ml-2 font-medium text-gray-800">{patent.assignee}</span>
                    </div>
                  </>
                )}
                
                <div>
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className="ml-2 font-medium text-gray-800">{item.status}</span>
                </div>
              </div>
            </div>

            {/* Citation */}
            {type === 'publication' && publication && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Citation</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 font-mono leading-relaxed">
                    {publication.authors.join(", ")}. "{publication.title}." <em>{publication.venue}</em>
                    {publication.volume && ` ${publication.volume}`}
                    {publication.pages && ` (${publication.pages})`}. {publication.year}.
                  </p>
                </div>
                <button className="mt-3 text-ocean-blue hover:text-ocean-dark text-sm font-medium transition-colors">
                  Copy Citation
                </button>
              </div>
            )}

            {/* Back to Publications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <Link
                to="/publications"
                className="inline-flex items-center text-ocean-blue hover:text-ocean-dark font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Publications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
