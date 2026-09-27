import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';

const Problem = dynamic(() => import('@/components/sections/Problem'));
const MultiStore = dynamic(() => import('@/components/sections/MultiStore'));
const ProductShowcase = dynamic(() => import('@/components/sections/ProductShowcase'));
const Inventory = dynamic(() => import('@/components/sections/Inventory'));
const CashControl = dynamic(() => import('@/components/sections/CashControl'));
const WeightSale = dynamic(() => import('@/components/sections/WeightSale'));
const Why = dynamic(() => import('@/components/sections/Why'));
const Pricing = dynamic(() => import('@/components/sections/Pricing'));
const OnboardingSupport = dynamic(() => import('@/components/sections/OnboardingSupport'));
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
        <Problem />
        <MultiStore />
        <ProductShowcase />
        <Inventory />
        <CashControl />
        <WeightSale />
        <Why />
        <Pricing />
        <OnboardingSupport />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
