const ContactInfo = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-[900px] mx-auto px-4 xl:px-0 pt-[20px] pb-[60px]">
        {/* 2x2 Grid for Desktop/Tablet, 1 Column for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[40px] md:gap-y-[50px] gap-x-[30px] md:gap-x-[40px] lg:gap-x-[30px] lg:gap-y-[35px] xl:gap-x-[30px] xl:gap-y-[50px] text-center">
          {/* WhatsApp */}
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img src="/assets/icons/whatsapp.svg" className="w-[68px] h-[68px] mx-auto" alt="WhatsApp / Call" />
            <h3 className="mt-[10px] text-[20px] leading-[24px] font-bold text-[#212529]">
              WhatsApp / Call
            </h3>
            <a href="tel:+918780321239" className="mt-[6px] text-[16px] leading-[24px] text-[#6C757D] hover:text-[#1D7AA3] transition-colors">
              +91 87803 21239
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img src="/assets/icons/mail.svg" className="w-[68px] h-[68px] mx-auto" alt="Email" />
            <h3 className="mt-[10px] text-[20px] leading-[24px] font-bold text-[#212529]">
              Email
            </h3>
            <a href="mailto:inquiry@athoscollagen.com" className="mt-[6px] text-[16px] leading-[24px] text-[#6C757D] hover:text-[#1D7AA3] transition-colors">
              inquiry@athoscollagen.com
            </a>
          </div>

          {/* Head Office */}
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="68px" height="68px" viewBox="0 0 36 36" style={{ fill: '#66b036' }} className="mx-auto mb-[10px]">
              <path d="M30 3H10a2 2 0 0 0-2 2v6H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M10 31H6V13h4v18zm20 0H12V5h18v26z" />
              <path d="M15 8h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zm-10 6h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zm-10 6h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zm-10 6h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zM15 26h3v3h-3zm5 0h3v3h-3zm5 0h3v3h-3zm-10-18v3h3V8h-3zm10 0v3h3V8h-3z" />
            </svg>
            <h3 className="mt-[10px] text-[20px] leading-[24px] font-bold text-[#212529]">
              Head Office
            </h3>
            <p className="mt-[6px] max-w-[360px] text-[16px] leading-[24px] text-[#6C757D]">
              317, Blu Eminence, Opp. Sangini, Jahangirabad, Dahin Nagar, Surat, Gujarat 395005, India
            </p>
          </div>

          {/* Factory Address */}
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <img src="/assets/icons/factory.svg" className="w-[68px] h-[68px] mx-auto" alt="Factory Address" />
            <h3 className="mt-[10px] text-[20px] leading-[24px] font-bold text-[#212529]">
              Factory Address
            </h3>
            <p className="mt-[6px] max-w-[380px] text-[16px] leading-[24px] text-[#6C757D]">
              Plot No. B-19, Gujarat Agro Infrastructure Mega Food Park, Village Shah & Vasravi, Tal. Mangrol, Dist. Surat-394410, Gujarat, India
            </p>
          </div>
        </div>

        {/* Separator */}
      </div>
    </section>
  );
};

export default ContactInfo;
