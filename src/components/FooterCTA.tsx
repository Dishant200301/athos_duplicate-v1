import { Link } from "react-router-dom";

const FooterCTA = () => {
  return (
    <section
      className="relative w-full h-[380px] flex items-start justify-center pb-32"
      style={{
        backgroundImage: "url(/images/contact-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-[70px] left-1/2 -translate-x-1/2 text-center px-6 xl:px-0">
        <h2 className="w-[565px] max-w-full text-[18px] md:text-[32px] leading-[38px] font-bold text-[#1D7AA3] mb-[25px]">
          Get in touch for a better connection.
        </h2>

        <Link
          to="/contact"
          className="inline-flex w-[144px] h-[40px] items-center justify-center bg-[#1D7AA3] text-white text-[16px] font-normal rounded-[6px_0px] hover:bg-[#1D7AA3]/90 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default FooterCTA;
