"use client";
import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("@/components/ui/Cursor"), { ssr: false });
const Nav = dynamic(() => import("@/components/ui/Nav"), { ssr: false });
const SectionProgress = dynamic(() => import("@/components/ui/SectionProgress"), { ssr: false });

import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import Retail from "@/components/sections/Retail";
import Luxury from "@/components/sections/Luxury";
import Dining from "@/components/sections/Dining";
import Entertainment from "@/components/sections/Entertainment";
import Events from "@/components/sections/Events";
import Venues from "@/components/sections/Venues";
import Leasing from "@/components/sections/Leasing";
import Sponsorship from "@/components/sections/Sponsorship";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="grain">
      <Cursor />
      <Nav />
      <SectionProgress />
      <Hero />
      <Why />
      <Retail />
      <Luxury />
      <Dining />
      <Entertainment />
      <Events />
      <Venues />
      <Leasing />
      <Sponsorship />
      <Contact />
    </main>
  );
}
