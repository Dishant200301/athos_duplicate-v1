const pharmaApplications = [
  {
    title: "Capsules and Encapsulation",
    items: [
      "Soft gel capsules.",
      "Hard gel capsules.",
      "Microencapsulation of active ingredients."
    ]
  },
  {
    title: "Tablets and Pills",
    items: [
      "Binding agent in tablet formulations.",
      "Coating agent for tablets and pills."
    ]
  },
  {
    title: "Drug Delivery Systems",
    items: [
      "Controlled-release formulations.",
      "Bioadhesive drug delivery systems."
    ]
  },
  {
    title: "Wound Care and Healing",
    items: [
      "Hydrogels for wound dressings.",
      "Bioactive wound healing products."
    ]
  },
  {
    title: "Biocompatible Materials",
    items: [
      "Scaffolds for tissue engineering.",
      "Biodegradable implants."
    ]
  },
  {
    title: "Cryopreservation",
    items: ["Cryoprotectant for cells and tissues during freezing."]
  }
];

const foodApplications = [
  {
    title: "Gelling Agent",
    items: [
      "Jelly desserts.",
      "Marshmallows.",
      "Gummy candies."
    ]
  },
  {
    title: "Film Forming",
    items: [
      "Edible films and coatings for food preservation.",
      "Encapsulation of Vitamins, Colorants and nutrients."
    ]
  },
  {
    title: "Stabilizer",
    items: [
      "Yogurts.",
      "Creams.",
      "Ice creams."
    ]
  },
  {
    title: "Emulsifier",
    items: ["Emulsified products like dressings and spreads."]
  },
  {
    title: "Thickner",
    items: [
      "Sauces.",
      "Soups.",
      "Gravies."
    ]
  },
  {
    title: "Clarifying Agent",
    items: ["Clarification of wines, beers and juices."]
  },
  {
    title: "Texturizer and Dairy Products",
    items: [
      "Meat products.",
      "Bakery products.",
      "Help in the production of low-fat spreads and dairy products like sour cream, yogurt, and cheese."
    ]
  },
  {
    title: "Replacement of Bovine and Porcine Gelatin",
    items: [
      "Fish Gelatin can replace other gelatins because it contains all essential and non-essential amino acids.",
      "Reduces pollution and increases the utilization of fish waste."
    ]
  }
];

const GelatinApplications = () => {
  return (
    <>
      {/* Pharmaceutical Applications */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
          <h2 className="text-[24px] md:text-[32px] font-bold text-primary leading-[120%] mb-10">
            Application of Athos Fish Gelatin in the Pharmaceutical Industry
          </h2>

          <div className="space-y-8">
            {pharmaApplications.map((section, index) => (
              <div key={index}>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#555555] mb-3 leading-[120%]">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-[#555555]">
                      <span className="mt-1 text-[16px] text-[#66b036]">▲</span>
                      <span className="text-[16px] leading-[24px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="mt-12 bg-white border border-[#DDDDDD] rounded-[20px] p-6 md:p-8">
            <p className="text-[18px] md:text-[20px] font-bold text-primary text-center leading-[150%]">
              Fish Gelatin is prized for its high purity, biocompatibility, and ability to form films and gels, making it an ideal choice for a variety of pharmaceutical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Food Industry Applications */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
          <h2 className="text-[24px] md:text-[32px] font-bold text-primary leading-[120%] mb-10">
            Application of Athos Fish Gelatin in the Food Industry
          </h2>

          <div className="space-y-8">
            {foodApplications.map((section, index) => (
              <div key={index}>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#555555] mb-3 leading-[120%]">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-[#555555]">
                      <span className="mt-1 text-[16px] text-[#66b036]">▲</span>
                      <span className="text-[16px] leading-[24px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="mt-12 bg-white border border-[#DDDDDD] rounded-[20px] p-6 md:p-8">
            <p className="text-[18px] md:text-[20px] font-bold text-primary text-center leading-[150%]">
              Fish Gelatin is highly favored for its ability to form thermoreversible gels, its transparency, and its lack of taste and odor, making it a versatile ingredient in the food industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GelatinApplications;
