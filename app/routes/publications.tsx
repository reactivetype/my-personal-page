import type { Route } from "./+types/publications";
import { useState } from "react";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Publications - Your Name | Principal ML Engineer" },
    { name: "description", content: "Academic publications, research papers, and patents in machine learning and artificial intelligence." },
  ];
}

const publications = [
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
    status: "Published"
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
    status: "Published"
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
    status: "Published"
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
    status: "Published"
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
    status: "Under Review"
  }
];

const patents = [
  {
    id: 1,
    title: "System and Method for Automated Quality Control Using Computer Vision",
    inventors: ["Your Name", "John Doe", "Jane Smith"],
    patentNumber: "US11,234,567 B2",
    filingDate: "2021-03-15",
    publicationDate: "2023-01-24",
    assignee: "Tech Corporation Inc.",
    abstract: "A computer vision system for automated quality control in manufacturing environments. The system uses deep learning models to detect defects with high accuracy and speed.",
    status: "Granted"
  },
  {
    id: 2,
    title: "Privacy-Preserving Machine Learning Training System",
    inventors: ["Your Name", "Alice Johnson", "Bob Wilson"],
    patentNumber: "US Application 17/987,654",
    filingDate: "2023-11-15",
    assignee: "AI Research Labs",
    abstract: "A federated learning system that enables collaborative model training while preserving data privacy through advanced cryptographic techniques and differential privacy.",
    status: "Pending"
  },
  {
    id: 3,
    title: "Real-Time Anomaly Detection in Streaming Data",
    inventors: ["Your Name", "Carol Brown"],
    patentNumber: "US11,456,789 B1",
    filingDate: "2020-08-10",
    publicationDate: "2022-09-27",
    assignee: "Data Analytics Corp.",
    abstract: "A system for detecting anomalies in high-velocity streaming data using ensemble machine learning methods with adaptive thresholds.",
    status: "Granted"
  }
];

export default function Publications() {
  const [activeTab, setActiveTab] = useState<"publications" | "patents">("publications");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = publications.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
    pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredPatents = patents.filter(patent =>
    patent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patent.inventors.some(inventor => inventor.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Publications & Patents
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My research contributions to the field of machine learning and artificial intelligence, 
            including peer-reviewed publications and intellectual property.
          </p>
        </div>
      </section>

      {/* Search and Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search publications, authors, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:border-transparent"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-1 bg-white rounded-lg p-1 shadow-sm max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("publications")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "publications"
                  ? "bg-ocean-blue text-white"
                  : "text-gray-600 hover:text-ocean-blue"
              }`}
            >
              Publications ({publications.length})
            </button>
            <button
              onClick={() => setActiveTab("patents")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "patents"
                  ? "bg-ocean-blue text-white"
                  : "text-gray-600 hover:text-ocean-blue"
              }`}
            >
              Patents ({patents.length})
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {activeTab === "publications" ? (
            <div className="space-y-6">
              {filteredPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          pub.type === 'journal' 
                            ? 'bg-blue-100 text-blue-800'
                            : pub.type === 'conference'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {pub.type === 'journal' ? 'Journal' : pub.type === 'conference' ? 'Conference' : 'Preprint'}
                        </span>
                        <span className="text-sm text-gray-500">{pub.year}</span>
                        <span className="text-sm text-gray-500">• {pub.citations} citations</span>
                      </div>
                      <Link 
                        to={`/publications/${pub.id}`}
                        className="block mb-2"
                      >
                        <h3 className="text-xl font-semibold text-gray-800 hover:text-ocean-blue transition-colors cursor-pointer">
                          {pub.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-2">
                        {pub.authors.join(", ")}
                      </p>
                      <p className="text-ocean-blue font-medium mb-3">
                        {pub.venue} {pub.volume && `${pub.volume}`} {pub.pages && `(${pub.pages})`}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {pub.abstract}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      DOI: {pub.doi}
                    </span>
                    <div className="flex gap-2">
                      <Link 
                        to={`/publications/${pub.id}`}
                        className="text-ocean-blue hover:text-ocean-dark font-medium text-sm transition-colors"
                      >
                        View Details →
                      </Link>
                      <button className="text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors">
                        Cite
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPatents.map((patent) => (
                <div
                  key={patent.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          patent.status === 'Granted'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {patent.status}
                        </span>
                        <span className="text-sm text-gray-500">{patent.patentNumber}</span>
                      </div>
                      <Link 
                        to={`/publications/${patent.id}`}
                        className="block mb-2"
                      >
                        <h3 className="text-xl font-semibold text-gray-800 hover:text-ocean-blue transition-colors cursor-pointer">
                          {patent.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-2">
                        Inventors: {patent.inventors.join(", ")}
                      </p>
                      <p className="text-ocean-blue font-medium mb-3">
                        Assignee: {patent.assignee}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {patent.abstract}
                      </p>
                      <div className="text-sm text-gray-500">
                        <p>Filing Date: {patent.filingDate}</p>
                        {patent.publicationDate && <p>Publication Date: {patent.publicationDate}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <Link 
                      to={`/publications/${patent.id}`}
                      className="text-ocean-blue hover:text-ocean-dark font-medium text-sm transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Research Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-ocean-blue mb-2">
                {publications.length}
              </div>
              <div className="text-gray-600">Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ocean-blue mb-2">
                {publications.reduce((sum, pub) => sum + pub.citations, 0)}
              </div>
              <div className="text-gray-600">Total Citations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ocean-blue mb-2">
                {patents.length}
              </div>
              <div className="text-gray-600">Patents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ocean-blue mb-2">
                {Math.round(publications.reduce((sum, pub) => sum + pub.citations, 0) / publications.length)}
              </div>
              <div className="text-gray-600">Avg. Citations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
