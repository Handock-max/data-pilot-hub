import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Packs & Tarifs", path: "/packs" },
    { label: "Nos Prix", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DP</span>
            </div>
            <span className="text-xl font-bold text-navy">Data Pilot Hub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" size="sm">
              <Link to="/formulaire">Commencer</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button asChild variant="default" size="sm">
              <Link to="/formulaire">Commencer</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;