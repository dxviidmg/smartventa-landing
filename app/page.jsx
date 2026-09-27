import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Industries from '@/components/sections/Industries';

const MultiLocationControl = dynamic(() => import('@/components/sections/MultiLocationControl'));
const BeforeAfter = dynamic(() => import('@/components/sections/BeforeAfter'));
const ProductShowcase = dynamic(() => import('@/components/sections/ProductShowcase'));
const Inventory = dynamic(() => import('@/components/sections/Inventory'));
const Stats = dynamic(() => import('@/components/sections/Stats'));
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
        <Industries />
        <BeforeAfter />
        <MultiLocationControl />
        <ProductShowcase />
        <Inventory />
        <Stats />
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
