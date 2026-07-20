const foodBenefits = [
  {
    title: "Compatibility with Halal and Kosher Diets",
    items: ["Fish gelatin is acceptable in Halal and Kosher diets, making it a preferred choice for consumers adhering to these dietary laws."]
  },
  {
    title: "Gelling Agent",
    items: ["Fish gelatin can form gels, making it useful in the production of various food products like jellies, desserts, and marshmallows."]
  },
  {
    title: "Stabilizer",
    items: ["It acts as a stabilizer in dairy products like yogurt, cream, and ice cream, helping to maintain texture and consistency."]
  },
  {
    title: "Thickening Agent",
    items: ["Fish gelatin can thicken sauces, soups, and gravies."]
  },
  {
    title: "Film-forming Properties",
    items: [
      "It is used in edible films and coatings to protect food products, extend shelf life, and maintain freshness."
    ]
  },
  {
    title: "Protein Source",
    items: ["Fish gelatin is a source of protein and can be added to food products to increase their protein content."]
  },
  {
    title: "Transparency and Clarity",
    items: ["Fish gelatin produces clearer gels compared to mammalian gelatins, which is desirable in some food applications."]
  },
  {
    title: "Mild Flavour",
    items: ["Fish gelatin typically has a milder flavor compared to other gelatins, making it more versatile in food applications."]
  },
  {
    title: "Cold Water Solubility",
    items: ["Some fish gelatins have better cold water solubility, making them easier to use in certain food applications."]
  },
  {
    title: "Low Allergenicity",
    items: ["Fish Gelatin is less likely to cause allergic reactions compared to bovine or porcine gelatin, making it suitable for consumers with specific dietary restrictions."]
  },
  {
    title: "Emulsifying Agent",
    items: ["Fish Gelatin can stabilize emulsions."]
  },
  {
    title: "Texturizing",
    items: ["Fish Gelatin can improve the texture of foods, such as jelly, marshmallows, and ice cream, by giving them their gooey or creamy textures."]
  },
  {
    title: "Microencapsulation",
    items: ["Fish Gelatin can be used to microencapsulate vitamins, colorants, and supplements."]
  },
  {
    title: "Low-fat",
    items: ["Fish Gelatin can replace carbohydrates and fat in many foods, such as half-fat margarine, reduced-fat cheeses, low-fat cream, and milk products."]
  },
  {
    title: "Protecting Jelly",
    items: ["Fish Gelatin can protect jelly products from light and oxygen."]
  },
  {
    title: "Shelf Life",
    items: ["Fish Gelatin helps foods last longer, thus increasing their shelf life."]
  },
  {
    title: "Other Uses",
    items: [
      "Fish Gelatin can also be used to make sliceable meat products and sausages, prevent syneresis in yogurts, and keep pates and jelled meats appetizing."
    ]
  }
];

const GelatinFoodIndustry = () => {
  return (
    <section className="py-12 md:py-16 bg-athos-light">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <h2 className="text-[24px] md:text-[32px] font-bold text-primary leading-[120%] mb-10">
          Benefits of Athos Fish Gelatin in the Food Industry
        </h2>

        <div className="space-y-8">
          {foodBenefits.map((benefit, index) => (
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

export default GelatinFoodIndustry;
