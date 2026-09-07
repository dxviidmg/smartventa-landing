import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';

const MultiStore = dynamic(() => import('@/components/sections/MultiStore'));
const Comparison = dynamic(() => import('@/components/sections/Comparison'));
const ProductShowcase = dynamic(() => import('@/components/sections/ProductShowcase'));
const CashControl = dynamic(() => import('@/components/sections/CashControl'));
const WeightSale = dynamic(() => import('@/components/sections/WeightSale'));
const Features = dynamic(() => import('@/components/sections/Features'));
const OnboardingSupport = dynamic(() => import('@/components/sections/OnboardingSupport'));
const Audience = dynamic(() => import('@/components/sections/Audience'));
const Pricing = dynamic(() => import('@/components/sections/Pricing'));
const FAQ = dynamic(() => import('@/components/sections/FAQ'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const Footer = dynamic(() => import('@/components/layout/Footer'));
const WhatsAppButton = dynamic(() => import('@/components/ui/WhatsAppButton'));

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main role="main">
        <Hero />
        <MultiStore />
        <Comparison />
        <ProductShowcase />
        <CashControl />
        <WeightSale />
        <Features />
        <OnboardingSupport />
        <Audience />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
