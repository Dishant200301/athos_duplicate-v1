const certifications = [

];

const AboutCertifications = () => {
  const row1 = certifications.filter(c => c.row === 1);
  const row2 = certifications.filter(c => c.row === 2);
  const row3 = certifications.filter(c => c.row === 3);

  return (
    <section className="w-full px-4 md:px-8 lg:px-[100px] xl:px-[200px] py-12 lg:py-16">
      <h2 className="text-[28px] md:text-[32px] font-bold text-athos-teal text-center mb-10">
        Globally Recognized Certifications
      </h2>

      <div className="space-y-0">
        {/* Row 1 - KOSHER, HALAL, FDA */}
        <div className="flex flex-wrap justify-center">
          <img src="/images/athos-CertificateLogo.webp" alt="Certifications" className="w-full max-w-[1000px] h-auto" />
        </div>

      </div>
    </section>
  );
};

export default AboutCertifications;
