const uniquenessPoints = [
  "Protein % is more than 97%.",
  "Odorless, Tasteless, & 100% Soluble in water.",
  "The presence of Glycine, Proline and Hydroxyproline (GPH) with a maximum percentage makes it Collagen Tripeptide (CTP).",
  "Ultra Low Molecular Weight.",
  "Fully dedicated facility for Fish Sources only.",
  "Accredited by globally recognized certification bodies."
];

const CollagenUniqueness = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-primary leading-[120%] mb-10">
              Uniqueness of Athos Fish Collagen Peptide
            </h2>

            <ul className="space-y-4">
              {uniquenessPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-[#555555]">
                  <span className="mt-1 text-[16px] text-[#66b036]">▲</span>
                  <span className="text-[16px] leading-[24px]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Certification Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/clinically-tested.png"
              alt="Athos Certification"
              className="w-[200px] h-auto md:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollagenUniqueness;
