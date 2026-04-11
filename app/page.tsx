import Hero from '@/components/sections/Hero';
import ServiceHighlights from '@/components/sections/ServiceHighlights';
import ClientSuccess from '@/components/sections/ClientSuccess';
import PpcWorkflowSection from '@/components/sections/PpcWorkflowSection';
import CurvyPpcCta from '@/components/sections/CurvyPpcCta';
import StickyPpcSection from '@/components/sections/StickyPpcSection';

export default function Home() {
  return (
    <div className="bg-[#05070d]">
      <Hero />
      <ServiceHighlights />
      <PpcWorkflowSection />
      <StickyPpcSection />
      <CurvyPpcCta />
      <ClientSuccess />
    </div>
  );
}
