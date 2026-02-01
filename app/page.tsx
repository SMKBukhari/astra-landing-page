"use client";

import Header from "@/components/global/LandingPage/Header";
import Hero from "@/components/global/LandingPage/Hero";
import Features from "@/components/global/LandingPage/Features";
import BrandMarquee from "@/components/global/LandingPage/BrandMarquee";
import { DynamicTextReveal } from "@/components/ui/text-reveal";
import Testimonials from "@/components/global/LandingPage/Testimonials";
import Outcomes from "@/components/global/LandingPage/Outcomes";
import HowItWorks from "@/components/global/LandingPage/HowItWorks";
import UseCases from "@/components/global/LandingPage/UseCases";
import Pricing from "@/components/global/LandingPage/Pricing";
import Footer from "@/components/global/LandingPage/Footer";

const AstraLandingPage = () => {
  return (
    <main className='bg-black min-h-screen text-white font-outfit overflow-x-hidden'>
      {/* Header is fixed, so it sits on top of everything */}
      <Header />

      {/* Hero Section - Full Screen */}
      <section id='hero' className='relative z-0'>
        <Hero />
        <div className='mt-5'>
          <BrandMarquee />
        </div>
        <div className='md:mt-32 mt-20 md:mb-24 mb-10 font-medium font-manrope md:max-w-5xl max-w-full mx-auto space-y-10 md:space-y-40 px-6 md:px-0 text-2xl md:text-5xl'>
          <div>
            <DynamicTextReveal
              mode='scroll'
              text='Financial Stress is Real. Astra Makes it Disappear.'
            />
          </div>

          <div>
            <DynamicTextReveal
              mode='scroll'
              text='Stop worrying about where your money goes. Traditional spreadsheets are slow and complicated.'
            />
          </div>

          <div>
            <DynamicTextReveal
              mode='scroll'
              text='Astra is smart, automatic, and completely effortless.'
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='relative z-10 md:mt-40 mt-10'>
        <Features />
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className='relative z-10 md:mt-40 mt-10'>
        <Testimonials />
      </section>

      {/* Outcomes Section */}
      <section id='outcomes' className='relative z-10 md:mt-40 mt-10'>
        <Outcomes />
      </section>

      {/* Features Section */}
      <section
        id='features'
        className='relative z-10 mt-10 bg-primary-bg py-20'
      >
        <HowItWorks />
      </section>

      {/* Use Cases Section */}
      <section id='outcomes' className='relative z-10 bg-primary-bg py-20'>
        <UseCases />
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='relative z-10 bg-primary-bg py-20'>
        <Pricing />
      </section>

      {/* Footer Section  */}
      <section id='footer' className='relative z-10 bg-primary-bg pt-20'>
        <Footer />
      </section>
    </main>
  );
};

export default AstraLandingPage;
