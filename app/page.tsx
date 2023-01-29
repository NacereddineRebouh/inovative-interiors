import Hero from "@/Components/Hero/Hero";
import Natural_Insp from "@/Components/Natural Inspiration/Natural_Insp";
import WeSell from "@/Components/weSellFeelings/weSell";
import Achievements from "@/Components/Achievements/Achievements";
import Testimonials from "@/Components/Testimonials/Testimonials";
export default function Home() {
  return (
    <>
      {/* Hero */}
      <section>
        <Hero />
      </section>
      <section>
        <Natural_Insp />
      </section>
      <section>
        <WeSell />
      </section>
      <section>
        <Testimonials />
      </section>
    </>
  );
}
