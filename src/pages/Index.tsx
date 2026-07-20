import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import UniquenessSection from "@/components/UniquenessSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExportSection from "@/components/ExportSection";
import CobrandingSection from "@/components/CobrandingSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Manufacturer and Exporter of Fish Collagen and Fish Gelatin</title>
        <meta name="description" content="Leading manufacturer and exporter of premium quality Fish Collagen Peptide and Fish Gelatin. World-class marine collagen products for health and wellness globally." />
        <link rel="canonical" href="https://athoscollagen.com/" />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Athos Collagen",
              "alternateName": ["Athos Collagen Pvt. Ltd.", "Athos"],
              "url": "https://athoscollagen.com/"
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Athos Collagen Pvt. Ltd.",
              "url": "https://athoscollagen.com/",
              "logo": "https://athoscollagen.com/images/logo.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918780321239",
                "contactType": "customer service",
                "email": "inquiry@athoscollagen.com",
                "areaServed": "Worldwide",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "317, Blu Eminence, Opp. Sangini, Jahangirabad, Dahin Nagar",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "postalCode": "395005",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.youtube.com/watch?v=-7ex7ZuD6mQ",
                "https://www.instagram.com/athoscollagen/",
                "https://www.facebook.com/athosfishcollagen/"
              ]
            }
          ])}
        </script>
      </Helmet>
      <TopHeader />
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <UniquenessSection />
        <BenefitsSection />
        <ExportSection />
        <CobrandingSection />
        {/* <CertificationsSection /> */}
      </main>
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
