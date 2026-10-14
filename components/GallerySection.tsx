"use client";

import React from "react";
import Image from "next/image";
import { Camera, Instagram } from "lucide-react";

const GalleryItem: React.FC<{
  photo: {
    title: string;
    category: string;
    image: string;
    aspect: string;
  };
}> = ({ photo }) => {
  const [imgSrc, setImgSrc] = React.useState(photo.image);

  return (
    <div className={`relative rounded-2xl overflow-hidden group border border-white/10 shadow-card ${photo.aspect}`}>
      <Image
        src={imgSrc}
        alt={photo.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
        onError={() =>
          setImgSrc(
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
          )
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="text-[10px] font-bold text-brand-amber uppercase tracking-wider">
          {photo.category}
        </span>
        <span className="font-display font-black text-base text-brand-cream">
          {photo.title}
        </span>
      </div>
    </div>
  );
};

export const GallerySection: React.FC = () => {
  const photos = [
    {
      title: "Signature Zinger Fillet",
      category: "Burgers",
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 md:col-span-2 row-span-2 h-72 sm:h-96",
    },
    {
      title: "Cheesy Chicken Shawarma",
      category: "Shawarma",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 h-52 sm:h-44",
    },
    {
      title: "Chicken Loaded Fries",
      category: "Starters",
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 h-52 sm:h-44",
    },
    {
      title: "Flaky Paratha Roll",
      category: "Lachha Rolls",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 h-52 sm:h-44",
    },
    {
      title: "Crispy Hot Wings",
      category: "Appetizers",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
      aspect: "col-span-1 h-52 sm:h-44",
    },
  ];

  return (
    <section className="py-20 bg-brand-bg relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-brand-amber font-bold text-xs uppercase tracking-widest mb-1.5">
              <Camera className="w-4 h-4" />
              <span>THE CRAFT &bull; SIGHTS &amp; SIZZLE</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-brand-cream tracking-tight">
              FRESH FROM OUR KITCHEN
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-brand-cream/60">
            <span>Tag us on Instagram #SGFoodPointKasur</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, idx) => {
            return <GalleryItem key={idx} photo={photo} />;
          })}
        </div>

      </div>
    </section>
  );
};
