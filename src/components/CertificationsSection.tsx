const certificationLogos = [
  "/images/FIEO.webp",
  "/images/FSSAI.webp",
  "/images/FSSC.webp",
  "/images/HACCP.webp",
  "/images/ISO-22000.webp",
  "/images/ISO-9001.webp",
  "/images/MPEDA.webp",
  "/images/halal.webp",
  "/images/kosher.webp",
  "/images/FDA.webp",
];

const CertificationsSection = () => {
  // Triple the logos for seamless infinite scroll
  const allLogos = [...certificationLogos, ...certificationLogos, ...certificationLogos];

  // Calculate the width of 2 cards + gap (150px + 150px + 32px gap)
  const cardWidth = 150;
  const gap = 32;
  const moveDistance = (cardWidth + gap) * 2; // Move 2 cards at a time

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary text-center mb-12">
          Globally Recognized Certifications
        </h2>

        {/* Infinite Scroll Container */}
        <div className="relative">
          <style>{`
            @keyframes stepScroll {
              0% {
                transform: translateX(0);
              }
              20% {
                transform: translateX(-${moveDistance}px);
              }
              40% {
                transform: translateX(-${moveDistance * 2}px);
              }
              60% {
                transform: translateX(-${moveDistance * 3}px);
              }
              80% {
                transform: translateX(-${moveDistance * 4}px);
              }
              100% {
                transform: translateX(-${moveDistance * 5}px);
              }
            }
            .animate-step-scroll {
              animation: stepScroll 15s ease-in-out infinite;
            }
            .animate-step-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex gap-8 animate-step-scroll">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center bg-white border border-athos-card-border rounded-lg p-2"
              >
                <img
                  src={logo}
                  alt={`Certification ${(index % certificationLogos.length) + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
