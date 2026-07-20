const pharmaceuticalBenefits = [
  {
    title: "Encapsulation",
    items: ["Fish gelatin is used to manufacture soft and hard gel capsules for dietary supplements and pharmaceutical products."]
  },
  {
    title: "Gelling Agent",
    items: ["It serves as a gelling agent in various pharmaceutical formulations."]
  },
  {
    title: "Solubility and Absorption",
    items: ["Fish gelatin capsules dissolve quickly in the stomach, aiding in the rapid absorption of the active ingredients."]
  },
  {
    title: "Film-forming Properties",
    items: ["It is used to create thin films for wound dressings and transdermal patches."]
  },
  {
    title: "Biocompatibility and Biodegradability",
    items: ["Fish gelatin is biocompatible and biodegradable, making it suitable for use in medical devices and tissue engineering."]
  },
  {
    title: "Controlled Release",
    items: ["It can be used to develop controlled-release drug delivery systems."]
  },
  {
    title: "Stabilizer for Vaccines",
    items: ["Fish gelatin acts as a stabilizer in certain vaccines and biological products."]
  },
  {
    title: "Low Allergenicity",
    items: ["Fish gelatin is considered to have lower allergenicity compared to mammalian gelatins, making it suitable for individuals with allergies to pork or beef."]
  },
  {
    title: "Capsules",
    items: [
      "Fish Gelatin is a key ingredient in the production of both soft and hard Gelatin capsules."
    ]
  },
  {
    title: "Tablets",
    items: [
      "Fish Gelatin is used in the formulation and coating of tablets."
    ]
  },
  {
    title: "Wound Care",
    items: [
      "Fish Gelatin can be used in the fabrication of wound healing pads."
    ]
  },
  {
    title: "Other Uses",
    items: [
      "Fish Gelatin can also be used in the preparation of microspheres, nanospheres, scaffolds, microneedles, hydrogels, and implants."
    ]
  }
];

const GelatinPharmaceutical = () => {
  return (
    <section className="py-12 md:py-16 bg-athos-light">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <h2 className="text-[24px] md:text-[32px] font-bold text-primary leading-[120%] mb-10">
          Benefits of Athos Fish Gelatin in the Pharmaceutical Industry
        </h2>

        <div className="space-y-8">
          {pharmaceuticalBenefits.map((benefit, index) => (
            <div key={index}>
              <h3 className="text-[18px] md:text-[18px] font-bold text-[#555555] mb-3 leading-[120%]">
                {benefit.title}
              </h3>
              <ul className="space-y-2">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-[#555555]">
                    <span className="mt-1 text-[16px] text-[#66b036]">▲</span>
                    <span className="text-[16px] leading-[24px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GelatinPharmaceutical;
