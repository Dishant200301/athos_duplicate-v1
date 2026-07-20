import { Link } from "react-router-dom";

const CobrandingSection = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-[#ecf5f8]">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1D7AA3] mb-6">
              Cobranding Opportunities
            </h2>
            <p className="text-base text-athos-text leading-[27px] max-w-[636px] mb-8 font-sans">
              Partner with Athos collagen pvt ltd. to deliver premium branded marine collagen peptide. Our co-branding program includes access to a respected brand name, marketing collateral, and established scientific research
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white text-base font-medium rounded-[6px_0px] px-8 py-2 bg-[#1D7AA3] hover:bg-[#3186ab] transition-all duration-300 group"
            >
              Contact us
            </Link>
          </div>

          {/* Product Image */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <img
              src="/images/athos_product.png"
              alt="Athos Collagen Products - Cobranding"
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CobrandingSection;
