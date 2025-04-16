
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />
      
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-light mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Page not found</p>
          <Link to="/" className="inline-flex items-center gap-2 hover:underline">
            <ArrowLeft size={16} />
            <span>Return to home</span>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
