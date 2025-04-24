import React from "react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import OfferDetails from "./OfferDetails";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header Section */}
      <header className="w-full border-b border-zinc-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Contact
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-zinc-800 border border-zinc-700">
            <span className="text-emerald-400 font-medium text-sm">
              Limited Time Offer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-emerald-500">
            Elevate Your Trading Game
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10">
            Join Zimtra's exclusive trading platform and unlock your potential
            with our limited-time promotional offer.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8 py-6 rounded-lg text-lg"
            >
              Claim Your Offer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 px-8 py-6 rounded-lg text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* Countdown Section */}
      <section className="w-full py-16 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            This Exclusive Offer Expires In
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto"></div>
        </div>
        <CountdownTimer initialHours={72} onComplete={() => console.log('Countdown completed!')} />
      </div>
    </section>
      {/* Offer Details Section */}
      <section className="w-full py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Premium Trading Experience
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto"></div>
          </div>
          <OfferDetails />
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Join thousands of successful traders who have already taken
            advantage of our platform.
          </p>
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-10 py-7 rounded-lg text-xl"
          >
            Start Trading Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <img
                src="/zimtra logo.svg"
                alt="Zimtra Logo"
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
                ZIMTRA
              </span>
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-6 text-center text-zinc-500">
            <p>© 2025 Zimtra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
