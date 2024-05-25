"use client";
import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x601",
  "https://source.unsplash.com/random/800x602",
  "https://source.unsplash.com/random/800x603",
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 2500 }),
    ClassNames(),
  ]);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    if (typeof autoplay.play === "function") {
      autoplay.play();
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex items-center pb-4 pt-8">
          {images.map((image, index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
