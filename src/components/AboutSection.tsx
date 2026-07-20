const strengths = [
  { icon: "🤝", text: "Integrity" },
  { icon: "🤞", text: "Honesty" },
  { icon: "🎖️", text: "Authenticity" },
];

const commitments = [
  { icon: "👌", text: "Best Quality" },
  { icon: "💼", text: "Better Service" },
  { icon: "💲", text: "Competitive Price" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/about-img.webp"
              alt="Athos Collagen facility"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-tl-[36px] rounded-br-[36px]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-6">
              Welcome to Athos Collagen Pvt. Ltd.
            </h2>

            <p className="text-base text-athos-text leading-[27px] mb-8">
              Athos Collagen Pvt. Ltd. is India's leading manufacturer and exporter of premium quality
              Fish Collagen Peptide and Fish Gelatin. With state-of-the-art facilities and a commitment
              to excellence, we deliver products that meet the highest international standards. Our
              dedication to quality, innovation, and customer satisfaction has made us a trusted partner
              for businesses worldwide.
            </p>


            {/* Lists */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* Our Strength */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-4">Our Strength</h3>
                <ul className="space-y-4">
                  {strengths.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-athos-text">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Commitment */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-4">Our Commitment</h3>
                <ul className="space-y-4">
                  {commitments.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-athos-text">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
