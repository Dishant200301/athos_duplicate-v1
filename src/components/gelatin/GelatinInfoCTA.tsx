import { Link } from "react-router-dom";

const GelatinInfoCTA = () => {
  return (
    <section className="py-12 md:py-16 lg:py-28 text-primary">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0 text-center">
        <h1 className="text-[20px] md:text-[28px] lg:text-[27px] font-bold leading-[140%] max-w-8xl mx-auto mb-8 xl:mb-12">
          Athos Collagen Pvt. Ltd. is leading Manufacturer and Exporter of Fish Gelatin from India.
        </h1>

        <Link to="/inquiry">
          <button className="bg-primary text-white px-6 py-2.5 rounded-tl-md rounded-br-md font-medium hover:bg-primary/90 transition-colors">
            Inquiry
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GelatinInfoCTA;
