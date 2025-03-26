import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Get current route

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Help Center", path: "/help" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white text-black text-center flex justify-between items-center py-8 px-14">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="flex justify-center gap-6 font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative pb-2 ${
                  location.pathname === item.path
                    ? "text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4">
        <button className="bg-white hover:bg-primary text-primary hover:text-white font-medium border border-primary px-6 py-1.5 rounded-full">
          Login
        </button>
        <button className="bg-white hover:bg-primary text-primary hover:text-white font-medium border border-primary px-6 py-1.5 rounded-full">
          Signup
        </button>
        <img src="/header/translate.png" alt="translate" className="object-contain" />
      </div>
    </header>
  );
};

export default Header;
