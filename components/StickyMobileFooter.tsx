"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { UserCircle } from "lucide-react";

export function StickyMobileFooter() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window?.scrollY || 0;
        setIsScrolled(currentScrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 transform md:hidden ${isScrolled ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
    >
      <div className="bg-black/90 backdrop-blur-md text-white p-2 rounded-full shadow-2xl flex items-center justify-between pl-6 pr-2 border border-white/10">
        <span className="font-bold text-sm">Gabung sekarang</span>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform">
            <UserCircle className="w-5 h-5" />
          </button>
          <Button
            variant="secondary"
            size="sm"
            className="text-black hover:bg-white/90 rounded-full px-6 h-10 font-bold"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
}
