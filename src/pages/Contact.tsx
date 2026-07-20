import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - Athos Collagen Pvt. Ltd</title>
        <meta name="description" content="Contact Athos Collagen for inquiries about Fish Collagen Peptide and Fish Gelatin. Reach out to our team for product information and business inquiries." />
        <link rel="canonical" href="https://athoscollagen.com/contact" />
      </Helmet>
      <TopHeader />
      <Navbar />
      <main className="py-10">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
