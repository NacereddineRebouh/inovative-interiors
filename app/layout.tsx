import Header from "../Components/Header";
import { Poppins } from "@next/font/google";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import "../styles/globals.css";
import Hero from "@/Components/Hero/Hero";
import Natural_Insp from "@/Components/Natural Inspiration/Natural_Insp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pop.className}`}>
      <head />
      <body className="bg-[#325e52]">
        <section id="header" className="absolute top-10 z-10">
          <Header />
        </section>
        {/* Hero */}
        <section>
          <Hero />
        </section>
        <section>
          <Natural_Insp />
        </section>
        {children}
      </body>
    </html>
  );
}
