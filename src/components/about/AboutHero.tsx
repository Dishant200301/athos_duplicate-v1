const AboutHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[500px] lg:h-[85vh] xl:h-[90vh] overflow-hidden">
      <img
        src="/images/athos-collagen-Peptide.png"
        alt="About Athos Collagen"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-end justify-center pb-8 md:items-center md:pb-0 text-center px-4">
        <h1 
          className="text-white font-semibold not-italic text-[18px] leading-[23px] md:text-[36px] md:leading-[40px] lg:text-[40px] lg:leading-[40px] max-w-[90%] md:max-w-[80%] lg:max-w-[1000px]"
          style={{ textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5), 0px 4px 20px rgba(0, 0, 0, 0.3)' }}
        >
          World's Best premium Quality
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
