import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MAINTENANCE_MODE } from "@/config/maintenance";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/inquiry/InquiryForm";
import FooterCTA from "@/components/FooterCTA";

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>Inquiry - Athos Collagen Pvt. Ltd</title>
        <meta name="description" content="Submit your inquiry for Athos Fish Collagen Peptide and Fish Gelatin products. Get detailed information and pricing for your business needs." />
        <link rel="canonical" href="https://athoscollagen.com/inquiry" />
      </Helmet>

      {MAINTENANCE_MODE ? (
        <>
          {/* Maintenance Navbar */}
          <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 sticky top-0">
            <div className="max-w-[1290px] mx-auto px-4 py-4 flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img src="/images/logo.webp" alt="Athos Collagen" className="h-[40px] md:h-[50px] w-auto" />
              </Link>
              <Link to="/inquiry">
                <Button className="btn-primary rounded-[6px_0px] text-sm px-6 py-2.5">
                  Inquiry
                </Button>
              </Link>
            </div>
          </header>
          <main>
            <InquiryForm />
          </main>
        </>
      ) : (
        <>
          <TopHeader />
          <Navbar />
          <main>
            <InquiryForm />
            <FooterCTA />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Inquiry;
