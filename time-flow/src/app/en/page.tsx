import { Hero } from "@/components-en/hero";
import { Features } from "@/components-en/features";
import { Screenshots } from "@/components-en/screenshots";
import { CTA } from "@/components-en/cta";
import { Footer } from "@/components-en/footer";

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
