import React from "react";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { StickyMobileFooter } from "../components/layout/StickyMobileFooter";
import { Hero } from "../components/sections/Hero";
import { AboutSection } from "../components/sections/AboutSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { EventsSection } from "../components/sections/EventsSection";
import { AudienceSection } from "../components/sections/AudienceSection";
import { IdeaGenerator } from "../components/sections/IdeaGenerator";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTASection } from "../components/sections/FinalCTASection";

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-black selection:bg-accent selection:text-black relative">
            <Navigation />

            <main className="relative z-10">
                <Hero />
                <AboutSection />
                <HowItWorksSection />
                <FeaturesSection />
                <EventsSection />
                <AudienceSection />

                <section className="py-12 bg-white overflow-hidden relative z-10">
                    <div className="container mx-auto px-4 md:px-8">
                        <IdeaGenerator />
                    </div>
                </section>

                <div id="faq">
                    <FAQ />
                </div>

                <FinalCTASection />

                <StickyMobileFooter />
            </main>

            <Footer />
        </div>
    );
}
