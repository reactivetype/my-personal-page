import type { Book, Author } from "~/types/book";

// Author information
const author: Author = {
  name: "Your Name",
  bio: "Principal ML Engineer and micro-publishing entrepreneur with 10+ years of experience in machine learning, artificial intelligence, and digital product creation. Author of multiple bestselling guides that have helped thousands of professionals advance their careers.",
  avatar: "/images/author-avatar.jpg",
  credentials: [
    "Principal ML Engineer",
    "10+ Years Industry Experience",
    "Published Researcher",
    "Digital Product Creator"
  ]
};

// Mock books data optimized for conversion
export const books: Book[] = [
  {
    id: "1",
    slug: "ml-career-blueprint",
    title: "The ML Career Blueprint",
    subtitle: "From Junior to Principal in 3 Years",
    description: "A step-by-step guide to accelerating your machine learning career with proven strategies, real-world examples, and actionable frameworks.",
    longDescription: "Transform your ML career with the exact blueprint that took me from junior engineer to principal in just 3 years. This comprehensive guide reveals the hidden strategies, essential skills, and career-accelerating tactics that most engineers never learn. You'll discover how to position yourself for rapid promotions, build influence within your organization, and become the go-to ML expert everyone wants to work with.",
    author,
    price: 47,
    originalPrice: 97,
    gumroadId: "ml-career-blueprint",
    gumroadUrl: "https://gumroad.com/l/ml-career-blueprint",
    coverImage: "/images/books/ml-career-blueprint-cover.jpg",
    previewUrl: "/previews/ml-career-blueprint-preview.pdf",
    sampleChapterUrl: "/samples/ml-career-blueprint-chapter1.pdf",
    tableOfContents: [
      "Chapter 1: The Career Acceleration Mindset",
      "Chapter 2: Building Your Technical Foundation",
      "Chapter 3: The Art of Strategic Visibility",
      "Chapter 4: Mastering Stakeholder Communication",
      "Chapter 5: Leading Without Authority",
      "Chapter 6: The Promotion Playbook",
      "Chapter 7: Building Your Personal Brand",
      "Chapter 8: Negotiating Your Worth",
      "Bonus: 30-Day Action Plan"
    ],
    testimonials: [
      {
        id: "1",
        name: "Sarah Chen",
        role: "Senior ML Engineer",
        company: "Google",
        avatar: "/images/testimonials/sarah-chen.jpg",
        content: "This book completely changed my approach to career growth. I got promoted to Senior ML Engineer just 6 months after implementing these strategies!",
        rating: 5
      },
      {
        id: "2",
        name: "Marcus Rodriguez",
        role: "ML Team Lead",
        company: "Microsoft",
        content: "The promotion playbook alone is worth 10x the price. I wish I had this guide when I started my career.",
        rating: 5
      }
    ],
    tags: ["Career Growth", "Machine Learning", "Leadership", "Promotion"],
    publishedDate: "2024-01-15",
    pageCount: 156,
    formats: ["PDF", "EPUB", "MOBI"],
    featured: true,
    bestseller: true
  },
  {
    id: "2",
    slug: "ai-product-launch",
    title: "AI Product Launch Secrets",
    subtitle: "From Prototype to Production in 90 Days",
    description: "The complete playbook for launching AI products that customers actually want to buy, with real case studies and proven frameworks.",
    longDescription: "Stop building AI products that nobody wants. This battle-tested guide reveals the exact process for validating, building, and launching AI products that generate real revenue. Based on 50+ successful AI product launches, you'll learn how to identify market opportunities, validate demand, build MVPs quickly, and scale to millions in revenue.",
    author,
    price: 67,
    originalPrice: 127,
    gumroadId: "ai-product-launch",
    gumroadUrl: "https://gumroad.com/l/ai-product-launch",
    coverImage: "/images/books/ai-product-launch-cover.jpg",
    previewUrl: "/previews/ai-product-launch-preview.pdf",
    sampleChapterUrl: "/samples/ai-product-launch-chapter1.pdf",
    tableOfContents: [
      "Chapter 1: The AI Product Opportunity",
      "Chapter 2: Market Validation Framework",
      "Chapter 3: Rapid Prototyping Strategies",
      "Chapter 4: Building Your MVP",
      "Chapter 5: User Testing & Iteration",
      "Chapter 6: Go-to-Market Strategy",
      "Chapter 7: Scaling & Growth Tactics",
      "Chapter 8: Monetization Models",
      "Bonus: 90-Day Launch Checklist"
    ],
    testimonials: [
      {
        id: "3",
        name: "David Kim",
        role: "AI Startup Founder",
        company: "TechFlow AI",
        content: "Used this exact framework to launch our AI SaaS product. We hit $50K MRR in our first 6 months!",
        rating: 5
      }
    ],
    tags: ["AI Products", "Startup", "Product Management", "Launch Strategy"],
    publishedDate: "2024-02-20",
    pageCount: 189,
    formats: ["PDF", "EPUB", "MOBI"],
    featured: true,
    bestseller: false
  },
  {
    id: "3",
    slug: "data-science-interviews",
    title: "Data Science Interview Mastery",
    subtitle: "Land Your Dream Job in 30 Days",
    description: "The ultimate preparation guide with 200+ real interview questions, detailed solutions, and insider tips from hiring managers.",
    longDescription: "Crack any data science interview with confidence. This comprehensive guide contains 200+ real interview questions from top tech companies, complete with detailed solutions and explanations. You'll master technical concepts, behavioral questions, case studies, and salary negotiations. Plus, get insider tips from hiring managers at Google, Facebook, Amazon, and Netflix.",
    author,
    price: 37,
    originalPrice: 67,
    gumroadId: "data-science-interviews",
    gumroadUrl: "https://gumroad.com/l/data-science-interviews",
    coverImage: "/images/books/data-science-interviews-cover.jpg",
    previewUrl: "/previews/data-science-interviews-preview.pdf",
    sampleChapterUrl: "/samples/data-science-interviews-chapter1.pdf",
    tableOfContents: [
      "Chapter 1: Interview Process Overview",
      "Chapter 2: Technical Fundamentals",
      "Chapter 3: Statistics & Probability",
      "Chapter 4: Machine Learning Questions",
      "Chapter 5: SQL & Database Queries",
      "Chapter 6: Python & R Coding",
      "Chapter 7: Case Study Frameworks",
      "Chapter 8: Behavioral Questions",
      "Chapter 9: Salary Negotiation",
      "Bonus: 30-Day Study Plan"
    ],
    testimonials: [
      {
        id: "4",
        name: "Jennifer Liu",
        role: "Data Scientist",
        company: "Netflix",
        content: "This book helped me land my dream job at Netflix! The practice questions were spot-on and the explanations were crystal clear.",
        rating: 5
      }
    ],
    tags: ["Data Science", "Interviews", "Career", "Job Search"],
    publishedDate: "2024-03-10",
    pageCount: 234,
    formats: ["PDF", "EPUB", "MOBI"],
    featured: false,
    bestseller: true
  },
  {
    id: "4",
    slug: "micro-saas-blueprint",
    title: "Micro-SaaS Blueprint",
    subtitle: "Build a $10K/Month Business Solo",
    description: "The complete guide to building and scaling a profitable micro-SaaS business as a solo founder, with real examples and proven strategies.",
    longDescription: "Discover how to build a profitable micro-SaaS business that generates $10K+ monthly revenue as a solo founder. This practical guide covers everything from idea validation to customer acquisition, with real case studies of successful micro-SaaS businesses. Learn the exact tools, strategies, and frameworks used by profitable solo founders.",
    author,
    price: 57,
    originalPrice: 97,
    gumroadId: "micro-saas-blueprint",
    gumroadUrl: "https://gumroad.com/l/micro-saas-blueprint",
    coverImage: "/images/books/micro-saas-blueprint-cover.jpg",
    previewUrl: "/previews/micro-saas-blueprint-preview.pdf",
    sampleChapterUrl: "/samples/micro-saas-blueprint-chapter1.pdf",
    tableOfContents: [
      "Chapter 1: The Micro-SaaS Opportunity",
      "Chapter 2: Finding Profitable Ideas",
      "Chapter 3: Validation Strategies",
      "Chapter 4: MVP Development",
      "Chapter 5: Customer Acquisition",
      "Chapter 6: Pricing & Monetization",
      "Chapter 7: Growth & Scaling",
      "Chapter 8: Automation & Systems",
      "Bonus: Solo Founder Toolkit"
    ],
    testimonials: [
      {
        id: "5",
        name: "Alex Thompson",
        role: "Solo Founder",
        company: "ProductHunt Maker",
        content: "Following this blueprint, I built my micro-SaaS to $8K MRR in 8 months. The validation framework alone saved me months of wasted effort.",
        rating: 5
      }
    ],
    tags: ["Micro-SaaS", "Solo Founder", "Entrepreneurship", "Business"],
    publishedDate: "2024-04-05",
    pageCount: 167,
    formats: ["PDF", "EPUB", "MOBI"],
    featured: false,
    bestseller: false
  },
  {
    id: "5",
    slug: "ai-automation-guide",
    title: "AI Automation for Professionals",
    subtitle: "Save 20 Hours Per Week with AI Tools",
    description: "A practical guide to automating your workflow with AI tools, featuring 50+ automation recipes and step-by-step tutorials.",
    longDescription: "Transform your productivity with AI automation. This hands-on guide shows you how to automate repetitive tasks, streamline workflows, and save 20+ hours per week using the latest AI tools. Includes 50+ ready-to-use automation recipes for marketing, sales, content creation, data analysis, and more.",
    author,
    price: 27,
    originalPrice: 47,
    gumroadId: "ai-automation-guide",
    gumroadUrl: "https://gumroad.com/l/ai-automation-guide",
    coverImage: "/images/books/ai-automation-guide-cover.jpg",
    previewUrl: "/previews/ai-automation-guide-preview.pdf",
    sampleChapterUrl: "/samples/ai-automation-guide-chapter1.pdf",
    tableOfContents: [
      "Chapter 1: AI Automation Fundamentals",
      "Chapter 2: Essential AI Tools",
      "Chapter 3: Content Creation Automation",
      "Chapter 4: Marketing & Sales Automation",
      "Chapter 5: Data Analysis Automation",
      "Chapter 6: Communication Automation",
      "Chapter 7: Advanced Workflows",
      "Chapter 8: ROI & Optimization",
      "Bonus: 50+ Automation Recipes"
    ],
    testimonials: [
      {
        id: "6",
        name: "Maria Garcia",
        role: "Marketing Manager",
        company: "TechCorp",
        content: "These automation recipes are gold! I've automated 80% of my content creation process and now have time for strategic work.",
        rating: 5
      }
    ],
    tags: ["AI Tools", "Automation", "Productivity", "Workflow"],
    publishedDate: "2024-05-15",
    pageCount: 143,
    formats: ["PDF", "EPUB", "MOBI"],
    featured: false,
    bestseller: false
  }
];

// Helper functions
export function getBookBySlug(slug: string): Book | undefined {
  return books.find(book => book.slug === slug);
}

export function getFeaturedBooks(): Book[] {
  return books.filter(book => book.featured);
}

export function getBestsellerBooks(): Book[] {
  return books.filter(book => book.bestseller);
}

export function getBooksByTag(tag: string): Book[] {
  return books.filter(book => book.tags.includes(tag));
}
