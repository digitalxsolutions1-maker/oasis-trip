"use client";
import React from "react";

const Header = () => {
  return (
    <header className="px-28 py-6">
      <div className=" bg-transparent backdrop-blur-3xl border-2 border-white/20 flex justify-center rounded-full px-6 py-4 items-center">
        {/* Logo ou Titre */}

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-10 text-lg">
            <li>
              <a href="#accueil" className="hover:text-blue-500 transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="#decouvrir" className="hover:text-blue-500 transition">
                Découvrir
              </a>
            </li>
            <li>
              <a href="#guide" className="hover:text-blue-500 transition">
                Guide Touristique
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
