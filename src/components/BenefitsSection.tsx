const benefits = [
  {
    image: "/images/anti-aging.webp",
    title: "Anti Aging",
    description: "Minimize fine lines and wrinkles.",
  },
  {
    image: "/images/bones.webp",
    title: "Bones and Joints",
    description: "Increase bone density and reduce joint pain.",
  },
  {
    image: "/images/hair.webp",
    title: "Hair Growth",
    description: "Promotes hair growth and reduces hair loss.",
  },
  {
    image: "/images/skain-care.webp",
    title: "Skin Care",
    description: "Rise the strength and elasticity of the skin.",
  },
  {
    image: "/images/nails-2.webp",
    title: "Nail Strength",
    description: "Prevents brittleness and increase nail strength.",
  },
  {
    image: "/images/wound-healing.webp",
    title: "Wound Healing",
    description: "Able to cure wounds on the skin of different intensities.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary text-center mb-12">
          Benefits of Fish Collagen Peptide
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-[34px] overflow-hidden border border-athos-card-border"
            >
              {/* Image */}
              <div className="h-[200px] md:h-[250px] lg:h-[310px] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Bar */}
              <div className="h-[74px] bg-[#1D7AA3] flex flex-col items-center justify-center px-0">
                <h3 className="text-lg font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/90 text-center leading-6">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
