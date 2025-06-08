import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Your Name | Principal ML Engineer" },
    { name: "description", content: "Principal Machine Learning Engineer with expertise in AI research and applied science. Passionate about photography and travel." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-ocean-blue to-ocean-light rounded-full flex items-center justify-center text-white text-4xl font-bold">
              YN
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Your Name
            </h1>
            <p className="text-xl sm:text-2xl text-ocean-blue font-medium mb-6">
              Principal Machine Learning Engineer
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming complex data into intelligent solutions. Former Applied Scientist with a passion for 
              cutting-edge AI research and real-world applications.
            </p>
          </div>
          
          {/* Contact */}
          <div className="flex justify-center">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-ocean-blue hover:bg-ocean-dark text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-ocean-blue mb-4">Professional Journey</h3>
              <p className="text-gray-600 mb-4">
                As a Principal Machine Learning Engineer, I lead the development of scalable AI systems that solve 
                complex business challenges. My background as an Applied Scientist has given me deep expertise in 
                research methodologies and the ability to bridge the gap between theoretical advances and practical applications.
              </p>
              <p className="text-gray-600">
                I specialize in deep learning, computer vision, and natural language processing, with experience 
                deploying models at scale in production environments. I'm passionate about mentoring teams and 
                driving innovation through collaborative research.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ocean-blue mb-4">Beyond Work</h3>
              <p className="text-gray-600 mb-4">
                When I'm not building AI systems, you'll find me behind a camera lens capturing the beauty of our world. 
                Photography has taught me to see patterns and details that often inspire my approach to machine learning problems.
              </p>
              <p className="text-gray-600">
                I love exploring new places and cultures, which has taken me to incredible destinations across continents. 
                Travel broadens my perspective and often leads to unexpected insights in both my personal and professional life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Places I've Been */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Places I've Explored</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Tokyo, Japan", image: "🏯" },
              { name: "Swiss Alps", image: "🏔️" },
              { name: "Santorini, Greece", image: "🏛️" },
              { name: "Patagonia", image: "🗻" },
              { name: "Iceland", image: "🌋" },
              { name: "New Zealand", image: "🌿" },
              { name: "Morocco", image: "🕌" },
              { name: "Norway", image: "🌌" },
            ].map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{place.image}</div>
                <h3 className="font-medium text-gray-800">{place.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills & Interests</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-ocean-blue/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm">Deep Learning, Computer Vision, NLP, MLOps</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-ocean-blue/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Photography</h3>
              <p className="text-gray-600 text-sm">Landscape, Travel, Close-up Photography</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-ocean-blue/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Travel</h3>
              <p className="text-gray-600 text-sm">Cultural Exploration, Adventure, Nature</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
