const benefits = [
  {
    title: "Skin Health",
    items: [
      "It improves skin hydration, elasticity, roughness, and density.",
      "Reduce wrinkles and fine lines."
    ]
  },
  {
    title: "Hair and nail health",
    items: ["Strengthen hair and nails, reducing brittleness."]
  },
  {
    title: "Anti-aging",
    items: ["Rejuvenation of the skin and reversal of skin aging."]
  },
  {
    title: "Joint Health",
    items: [
      "Support joint function.",
      "Reduce the symptoms of arthritis and joint pain."
    ]
  },
  {
    title: "Bone Health",
    items: ["Enhance bone density and strength."]
  },
  {
    title: "Anti-inflammatory",
    items: ["Possess anti-inflammatory properties, which can help reduce inflammation throughout the body."]
  },
  {
    title: "Muscle Mass",
    items: ["It aids in muscle repair and growth, which is beneficial for athletes and active individuals."]
  },
  {
    title: "Gut Health",
    items: ["Support the integrity of the gut lining, which can help with digestive issues."]
  },
  {
    title: "Heart health support",
    items: ["Improve cardiovascular health."]
  },
  {
    title: "Brain Health",
    items: [
      "It helps to improve sleep.",
      "It has inhibitory functions that take action against excessive excitation in the brain.",
      "Reduce anxiety symptoms."
    ]
  },
  {
    title: "Provide antioxidant properties",
    items: ["Reduce oxidative stress."]
  }
];

const CollagenBenefits = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <h2 className="text-[24px] md:text-[32px] font-bold text-primary leading-[120%] mb-12">
          Benefits of the Athos Fish Collagen Peptide
        </h2>

        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h3 className="text-[18px] font-semibold text-[#555555] mb-3 leading-[144%]">
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

export default CollagenBenefits;
