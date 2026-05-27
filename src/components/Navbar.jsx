import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Upload",
      path: "/upload",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            
            {/* Logo Circle */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">
                E
              </span>
            </div>

            {/* Brand */}
            <div>
              <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                ESG Platform
              </h1>

              <p className="text-xs text-slate-500">
                Sustainability Review System
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100 hover:text-emerald-700"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;