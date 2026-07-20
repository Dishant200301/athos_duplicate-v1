const ExportSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-athos-light-bg">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-6">
              Exporting Worldwide
            </h2>

            <p className="text-base text-athos-text leading-[27px] max-w-[636px]">
              Premium quality Fish Collagen Peptide and Fish Gelatin are exported by Athos Collagen Pvt. Ltd. to clients in the United States, Canada, South America, the United Kingdom, Europe, Japan, South Korea, Israel, Gulf Countries, CIS Countries, Vietnam, and other nations. Our dedication to sustainability and high quality guarantees that our Fish Collagen Peptide promotes health and wellbeing everywhere.
            </p>
          </div>

          {/* World Map Image */}
          <div className="flex items-center justify-center order-1 lg:order-1">
            <img
              src="/images/athos-map-1.webp"
              alt="World Map - Export Destinations"
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportSection;
