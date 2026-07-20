const applications = [
  {
    title: "Nutraceuticals and Dietary Supplements",
    items: [
      "Collagen supplements (powders, capsules, and tablets).",
      "Protein bars and drinks.",
      "Joint health supplements."
    ]
  },
  {
    title: "Food and Beverages",
    items: [
      "Functional foods (fortified with collagen).",
      "Cereals and Energy drinks.",
      "Protein shakes and smoothies.",
      "Collagen-infused beverages.",
      "Help with digestion, absorption, and distribution throughout the body.",
      "Dietary Supplements.",
      "Increase the emulsifying stability, hardness, and water-holding capacity of foods.",
      "Snacks."
    ]
  },
  {
    title: "Cosmetics and Skincare",
    items: [
      "Anti-aging creams and serums.",
      "Moisturizers.",
      "Hair care products.",
      "Nail care treatments.",
      "Face masks."
    ]
  },
  {
    title: "Pharmaceuticals",
    items: [
      "Help with joint pain and inflammation.",
      "Treat musculoskeletal disorders like osteoporosis and sarcopenia.",
      "Stabilize blood sugar levels.",
      "Supporting hair and nail growth.",
      "Wound healing products.",
      "Tissue engineering.",
      "Drug delivery systems."
    ]
  },
  {
    title: "Pet Food",
    items: ["Promotes healthy joint function, skin health, and mobility."]
  },
  {
    title: "Agriculture",
    items: ["Animal feed supplements."]
  },
  {
    title: "Biotechnology",
    items: [
      "Scaffold materials for cell culture.",
      "Biocompatible materials for medical implants."
    ]
  }
];

const CollagenApplications = () => {
  return (
    <section className="py-12 md:py-16 bg-athos-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold text-primary leading-[120%] mb-10">
              Application of the Fish Collagen Peptide
            </h2>

            <div className="space-y-8">
              {applications.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg md:text-xl font-bold text-muted-foreground mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-1 text-[#66b036]">▲</span>
                        <span className="text-base leading-[150%]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="hidden lg:flex flex-col gap-6 items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-athos-green/20 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
                alt="Fitness and health"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-athos-green/20 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400"
                alt="Healthy food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-athos-green/20 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400"
                alt="Skincare"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="mt-12 bg-background border border-border rounded-[20px] p-6 md:p-8">
          <p className="text-lg md:text-xl font-bold text-primary text-center leading-[150%]">
            Fish Collagen Peptide is valued for its bioavailability, biocompatibility, and ability to support skin elasticity, joint health, and overall wellness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollagenApplications;
