import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollagenInfoCTA from "@/components/collagen/CollagenInfoCTA";
import CollagenUniqueness from "@/components/collagen/CollagenUniqueness";
import AminoAcidComposition from "@/components/collagen/AminoAcidComposition";
import CollagenBenefits from "@/components/collagen/CollagenBenefits";
import CollagenApplications from "@/components/collagen/CollagenApplications";
import FooterCTA from "@/components/FooterCTA";

const FishCollagenPeptide = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>Fish Collagen Peptide - Athos Collagen Pvt. Ltd</title>
        <meta name="description" content="Discover Athos Fish Collagen Peptide - premium quality marine collagen with high bioavailability. Benefits for skin, joints, hair, and overall wellness." />
        <link rel="canonical" href="https://athoscollagen.com/fish-collagen-peptide" />
      </Helmet>
      <TopHeader />
      <Navbar />
      <main>
        <CollagenInfoCTA />
        <CollagenUniqueness />
        <AminoAcidComposition />
        <CollagenBenefits />

        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FishCollagenPeptide;
