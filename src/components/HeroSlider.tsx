import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/athos-slider-1.webp",
    alt: "Fish collagen production facility",
    cta: "Make life healthy & beautiful"
  },
  {
    image: "/images/athos-slider-2.webp",
    alt: "Laboratory research",
    cta: "Leading manufacturer and supplier of Fish Collagen Peptide & Fish Gelatin"
  },
  {
    image: "/images/athos-slider-3.webp",
    alt: "Premium collagen products",
    cta: "Fish Collagen Peptide for healthy future"
  },
  {
    image: "/images/athos-slider-4.webp",
    alt: "Quality assurance",
    cta: "Worldwide Fish Collagen Peptide & Fish Gelatin specialist"
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full bg-primary overflow-hidden">
      {/* Heading Bar */}
      <div className="relative md:absolute md:top-0 md:left-0 md:right-0 z-20 min-h-[53px] md:h-[53px] flex items-center justify-center bg-primary py-2 md:py-0">
        <h1 className="text-primary-foreground text-sm md:text-base lg:text-lg tracking-wider text-center px-4">
          World's Best Premium Quality Fish Collagen Peptide
        </h1>
      </div>

      {/* Slides */}
      <div className="relative w-full h-full">
        {/* Spacer Image to set height */}
        <img
          src={slides[0].image}
          alt="Spacer"
          className="w-full h-auto invisible opacity-0 pointer-events-none"
        />

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* CTA Overlay - Changes based on current slide */}
      <div className="absolute bottom-8 md:bottom-20 left-4 md:left-8 lg:left-16 xl:left-[200px] z-20">
        <div className="bg-green-600/80 backdrop-blur-sm rounded-tl-2xl rounded-br-2xl px-3 py-2 md:px-10 md:py-5 max-w-[80%] md:max-w-[450px]">
          <p className="text-primary-foreground text-[10px] md:text-2xl lg:text-[28px] font-semibold text-center leading-tight">
            {slides[currentSlide].cta}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${index === currentSlide
              ? "w-2 h-2 md:w-3 md:h-3 bg-secondary"
              : "w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-muted-foreground/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
