const MissionVision = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          {/* Mission Card */}
          <div className="w-[280px] h-[280px] rounded-full bg-[#66b036] flex items-center justify-center shadow-lg">
            <div className="text-center px-8">
              <h3 className="text-white font-bold text-[24px] mb-4">Mission</h3>
              <p className="text-white text-[14px] leading-[20px]">
                To provide world-class marine collagen products that enhance health and wellness globally
              </p>
            </div>
          </div>

          {/* Divider - Desktop Only */}
          <div className="hidden lg:block w-[100px] border-t-2 border-dashed border-gray-300"></div>

          {/* Logo Card */}
          <div className="w-[280px] h-[280px] rounded-full bg-[#F4F4F4] flex items-center justify-center">
            <img src="/images/athos-logo-full-form.webp" alt="Athos Collagen" className="w-[280px] h-auto" />
          </div>

          {/* Divider - Desktop Only */}
          <div className="hidden lg:block w-[100px] border-t-2 border-dashed border-gray-300"></div>

          {/* Vision Card */}
          <div className="w-[280px] h-[280px] rounded-full bg-[#1D7AA3] flex items-center justify-center shadow-lg">
            <div className="text-center px-8">
              <h3 className="text-white font-bold text-[24px] mb-4">Vision</h3>
              <p className="text-white text-[14px] leading-[20px]">
                To be the most trusted and innovative leader in the marine collagen industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
