import Hero from "@/components/Hero";
import About from "@/components/About";
import Articles from "@/components/Articles";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import WhatsAppBubble from '@/components/WhatsAppBubble';
import CognitiveTherapyAnalysis from "@/components/CognitiveTherapyAnalysis";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Articles />
      <Gallery />
      <CognitiveTherapyAnalysis />
      <Contact />
      <WhatsAppBubble />
    </main>
  );
}
