import Hero from '@/components/sections/Hero';
import ServiceHighlights from '@/components/sections/ServiceHighlights';
import ClientSuccess from '@/components/sections/ClientSuccess';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <ServiceHighlights />
      <ClientSuccess />
    </div>
  );
}
