import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Maintenance = () => {
  useEffect(() => {
    console.warn("Website is currently in Maintenance Mode due to new product launches.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-gradient-to-br from-white via-[#EDF5F8] to-[#D5E6EE] relative overflow-hidden">
      {/* Decorative background elements for premium feel */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <Helmet>
        <title>Under Maintenance | Athos Collagen</title>
        <meta name="description" content="Athos Collagen is currently undergoing scheduled maintenance for exciting new product launches. We will be back online shortly." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Navbar */}
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

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center relative z-10">
       

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Website Under Maintenance
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Due To New Products Launches
          </h2>

        </div>
      </main>

    
    </div>
  );
};

export default Maintenance;

