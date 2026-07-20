import { Link } from "react-router-dom";

const CollagenInfoCTA = () => {
  return (
    <section className="py-12 md:py-16 xl:py-24 lg:py-12 bg-white">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0 text-center">
        <h1 className="text-[20px] md:text-[24px] lg:text-[27.2px] font-bold leading-[160%] text-[#257FA6] max-w-8xl mx-auto mb-8">
          Athos Collagen Pvt. Ltd. is leading Manufacturer and Exporter of Fish Collagen Peptide from India.
        </h1>

        <p className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[160%] text-primary max-w-3xl mx-auto mb-10">
          Fish Collagen Peptide is also known as Marine Collagen or Hydrolyzed Collagen Peptide.
        </p>

        <Link to="/inquiry">
          <button className="bg-primary text-white px-10 py-2.5 rounded-tl-md rounded-br-md font-normal text-[16px] leading-[150%] hover:bg-primary/90 transition-colors">
            Inquiry
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CollagenInfoCTA;
