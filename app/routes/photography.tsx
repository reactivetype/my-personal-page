import type { Route } from "./+types/photography";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Photography - Your Name | Principal ML Engineer" },
    { name: "description", content: "A collection of travel, landscape, and close-up photography from around the world." },
  ];
}

const photos = [
  {
    id: 1,
    title: "Northern Lights in Iceland",
    category: "Landscape",
    location: "Reykjavik, Iceland",
    date: "2024-02-15",
    camera: "Canon EOS R5",
    lens: "24-70mm f/2.8",
    settings: "ISO 1600, f/2.8, 15s",
    description: "Captured during a clear winter night, the aurora borealis danced across the sky in vibrant greens and purples.",
    image: "🌌",
    featured: true
  },
  {
    id: 2,
    title: "Cherry Blossoms in Kyoto",
    category: "Travel",
    location: "Kyoto, Japan",
    date: "2023-04-08",
    camera: "Sony A7R IV",
    lens: "85mm f/1.4",
    settings: "ISO 400, f/2.8, 1/250s",
    description: "The famous cherry blossom season in Kyoto, with petals gently falling like snow.",
    image: "🌸",
    featured: true
  },
  {
    id: 3,
    title: "Dewdrop on Spider Web",
    category: "Close-up",
    location: "Local Park, Morning",
    date: "2024-05-20",
    camera: "Canon EOS R5",
    lens: "100mm Macro f/2.8",
    settings: "ISO 200, f/5.6, 1/125s",
    description: "Early morning dew creates perfect spheres on an intricate spider web, each drop acting as a tiny lens.",
    image: "💧",
    featured: false
  },
  {
    id: 4,
    title: "Patagonian Peaks",
    category: "Landscape",
    location: "Torres del Paine, Chile",
    date: "2023-12-10",
    camera: "Sony A7R IV",
    lens: "16-35mm f/2.8",
    settings: "ISO 100, f/8, 1/60s",
    description: "The dramatic granite towers of Patagonia rising from the windswept plains.",
    image: "🏔️",
    featured: true
  },
  {
    id: 5,
    title: "Moroccan Spice Market",
    category: "Travel",
    location: "Marrakech, Morocco",
    date: "2023-09-22",
    camera: "Fujifilm X-T5",
    lens: "35mm f/1.4",
    settings: "ISO 800, f/2.8, 1/60s",
    description: "The vibrant colors and textures of a traditional spice market in the medina of Marrakech.",
    image: "🌶️",
    featured: false
  },
  {
    id: 6,
    title: "Butterfly Wing Detail",
    category: "Close-up",
    location: "Botanical Garden",
    date: "2024-06-15",
    camera: "Canon EOS R5",
    lens: "100mm Macro f/2.8",
    settings: "ISO 400, f/8, 1/200s",
    description: "Intricate patterns and iridescent colors on a monarch butterfly wing, revealing nature's incredible detail.",
    image: "🦋",
    featured: false
  },
  {
    id: 7,
    title: "Swiss Alpine Lake",
    category: "Landscape",
    location: "Lake Oeschinen, Switzerland",
    date: "2023-07-30",
    camera: "Sony A7R IV",
    lens: "24-70mm f/2.8",
    settings: "ISO 100, f/11, 1/30s",
    description: "Crystal clear alpine waters reflecting the surrounding peaks in perfect symmetry.",
    image: "🏞️",
    featured: true
  },
  {
    id: 8,
    title: "Street Art in Buenos Aires",
    category: "Travel",
    location: "Buenos Aires, Argentina",
    date: "2024-01-18",
    camera: "Fujifilm X-T5",
    lens: "23mm f/2",
    settings: "ISO 200, f/4, 1/125s",
    description: "Vibrant street art tells stories of culture and history in the colorful neighborhoods of Buenos Aires.",
    image: "🎨",
    featured: false
  },
  {
    id: 9,
    title: "Frost Crystal Formation",
    category: "Close-up",
    location: "Winter Morning",
    date: "2024-01-05",
    camera: "Canon EOS R5",
    lens: "100mm Macro f/2.8",
    settings: "ISO 100, f/11, 1/60s",
    description: "Delicate ice crystals form intricate patterns on a frozen leaf, showcasing nature's geometric artistry.",
    image: "❄️",
    featured: false
  },
  {
    id: 10,
    title: "Santorini Sunset",
    category: "Travel",
    location: "Oia, Santorini, Greece",
    date: "2023-08-14",
    camera: "Sony A7R IV",
    lens: "70-200mm f/2.8",
    settings: "ISO 100, f/8, 1/125s",
    description: "The famous blue domes and white buildings of Santorini bathed in golden sunset light.",
    image: "🌅",
    featured: true
  },
  {
    id: 11,
    title: "Milky Way over Desert",
    category: "Landscape",
    location: "Atacama Desert, Chile",
    date: "2023-11-25",
    camera: "Canon EOS R5",
    lens: "14mm f/1.8",
    settings: "ISO 3200, f/1.8, 25s",
    description: "The Milky Way stretches across the clear desert sky, one of the darkest places on Earth.",
    image: "✨",
    featured: true
  },
  {
    id: 12,
    title: "Hummingbird in Flight",
    category: "Close-up",
    location: "Garden",
    date: "2024-04-12",
    camera: "Canon EOS R5",
    lens: "100-400mm f/4.5-5.6",
    settings: "ISO 1600, f/5.6, 1/2000s",
    description: "A ruby-throated hummingbird frozen in time, wings creating a perfect blur of motion.",
    image: "🐦",
    featured: false
  }
];

const categories = ["All", "Travel", "Landscape", "Close-up"];

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const featuredPhotos = photos.filter(photo => photo.featured);

  const openLightbox = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
    setCurrentSlideIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentSlideIndex + 1) % filteredPhotos.length;
    setCurrentSlideIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentSlideIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentSlideIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  // Keyboard event handling for modal
  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevPhoto();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextPhoto();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentSlideIndex, filteredPhotos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Photography
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments and perspectives from my travels around the world. 
            From sweeping landscapes to intimate close-ups, each image tells a story.
          </p>
        </div>
      </section>

      {/* Featured Slideshow */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Work</h2>
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-ocean-blue/20 to-ocean-light/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">{featuredPhotos[0]?.image}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {featuredPhotos[0]?.title}
                </h3>
                <p className="text-ocean-blue font-medium">
                  {featuredPhotos[0]?.location}
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ocean-blue/10 text-ocean-blue">
                    {featuredPhotos[0]?.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {featuredPhotos[0]?.date}
                  </span>
                </div>
                <button
                  onClick={() => featuredPhotos[0] && openLightbox(featuredPhotos[0])}
                  className="text-ocean-blue hover:text-ocean-dark font-medium text-sm transition-colors"
                >
                  View Full Size →
                </button>
              </div>
              <p className="text-gray-600">
                {featuredPhotos[0]?.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-1 bg-white rounded-lg p-1 shadow-sm max-w-lg mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-ocean-blue text-white"
                    : "text-gray-600 hover:text-ocean-blue"
                }`}
              >
                {category} ({category === "All" ? photos.length : photos.filter(p => p.category === category).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                {/* Photo Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-ocean-blue/10 to-ocean-light/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl">{photo.image}</div>
                </div>

                <div className="p-4">
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-ocean-blue/10 text-ocean-blue">
                      {photo.category}
                    </span>
                    {photo.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Location */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-ocean-blue transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {photo.location}
                  </p>

                  {/* Camera Info */}
                  <div className="text-xs text-gray-500">
                    <p>{photo.camera} • {photo.lens}</p>
                    <p>{photo.settings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Photo Content */}
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Large Photo Display */}
              <div className="aspect-video bg-gradient-to-br from-ocean-blue/20 to-ocean-light/20 flex items-center justify-center">
                <div className="text-9xl">{selectedPhoto.image}</div>
              </div>

              {/* Photo Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-ocean-blue font-medium mb-1">
                      {selectedPhoto.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedPhoto.date}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ocean-blue/10 text-ocean-blue">
                    {selectedPhoto.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">
                  {selectedPhoto.description}
                </p>

                {/* Technical Details */}
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-800">Camera:</span>
                    <p className="text-gray-600">{selectedPhoto.camera}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Lens:</span>
                    <p className="text-gray-600">{selectedPhoto.lens}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Settings:</span>
                    <p className="text-gray-600">{selectedPhoto.settings}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Follow My Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Photography is a passion that complements my technical work, teaching me to see patterns 
            and beauty in both data and the natural world.
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
            Connect with Me
          </a>
        </div>
      </section>
    </div>
  );
}
