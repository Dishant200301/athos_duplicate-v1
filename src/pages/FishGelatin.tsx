import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GelatinInfoCTA from "@/components/gelatin/GelatinInfoCTA";
import GelatinPharmaceutical from "@/components/gelatin/GelatinPharmaceutical";
import GelatinFoodIndustry from "@/components/gelatin/GelatinFoodIndustry";
import GelatinApplications from "@/components/gelatin/GelatinApplications";
import GelatinOtherBenefits from "@/components/gelatin/GelatinOtherBenefits";
import FooterCTA from "@/components/FooterCTA";

const FishGelatin = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>Fish Gelatin - Athos Collagen Pvt. Ltd</title>
        <meta name="description" content="Explore Athos Fish Gelatin for pharmaceutical and food industry applications. High purity, biocompatible, and versatile marine gelatin products." />
        <link rel="canonical" href="https://athoscollagen.com/fish-gelatin" />
      </Helmet>
      <TopHeader />
      <Navbar />
      <main>
        <GelatinInfoCTA />
        <GelatinPharmaceutical />
        <GelatinFoodIndustry />
        {/* <GelatinApplications /> */}
        <GelatinOtherBenefits />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FishGelatin;
