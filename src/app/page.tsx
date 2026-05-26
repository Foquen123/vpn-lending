import BenefitsSection from '@/components/Section/BenefitsSection';
import DevicesSection from '@/components/Section/DevicesSection';
import FaqSection from '@/components/Section/FaqSection';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import HeroSection from '@/components/Section/HeroSection';
import HowSection from '@/components/Section/HowSection';
import PlansSection from '@/components/Section/PlansSection';
import ServersSection from '@/components/Section/ServersSectoin';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-deep text-text-primary">
      <Header></Header>
      <HeroSection></HeroSection>
      <BenefitsSection></BenefitsSection>
      <ServersSection></ServersSection>
      <PlansSection></PlansSection>

      <HowSection></HowSection>
      <DevicesSection></DevicesSection>
      <FaqSection></FaqSection>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </main>
  );
}
