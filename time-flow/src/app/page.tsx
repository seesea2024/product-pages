import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Screenshots } from "@/components/screenshots";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Hero />
      <Features />
      <Screenshots />
      <CTA />
      <Footer />
    </div>
  );
}
