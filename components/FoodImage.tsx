"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface FoodImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80";

export const FoodImage: React.FC<FoodImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  className,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden bg-brand-card">
      <Image
        {...rest}
        src={imgSrc}
        alt={alt}
        className={`${className || ""} transition-opacity duration-300 ${
          isLoading ? "opacity-40 scale-100" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc);
          setIsLoading(false);
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-white/5 animate-pulse pointer-events-none" />
      )}
    </div>
  );
};
