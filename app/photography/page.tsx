import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Photography - Your Name",
  description: "Travel and landscape photography from around the world.",
};

export default function PhotographyPage() {
  const photos = [
    { title: "Mount Fuji Sunrise", location: "Japan" },
    { title: "Northern Lights", location: "Iceland" },
    { title: "Swiss Alps Panorama", location: "Switzerland" },
    { title: "Santorini Sunset", location: "Greece" },
    { title: "Patagonia Glaciers", location: "Argentina" },
    { title: "Moroccan Desert", location: "Morocco" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Photography
          </h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Capturing moments from my travels around the world
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-ocean-blue to-ocean-dark flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📷</div>
                    <h3 className="font-semibold">{photo.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{photo.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
