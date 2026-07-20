import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
// Button import removed as it is not used directly.
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-hidden">
      <Helmet>
        <title>404 Not Found | Athos</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <TopHeader />
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 bg-accent/30">
        <div className="container-custom text-center py-16">
          <div className="mb-6 inline-block p-4 rounded-full bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-question"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><circle cx="10" cy="13" r="2" /><path d="m20 17-1.09-1.09" /></svg>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link to="/" className="inline-flex items-center btn-primary rounded-md shadow-md gap-2 hover:translate-y-[-2px] transition-transform">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </main>

      <FooterCTA />
      <Footer />
    </div>
  );
};

export default NotFound;
