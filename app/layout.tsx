import Header from "../Components/Header";
import { Poppins } from "@next/font/google";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import "../styles/globals.css";
import Footer from "@/Components/Footer/Footer";
import { AnalyticsWrapper } from "@/Components/Analytics/analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pop.className} overflow-x-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-[#325e52] selection:bg-slate-500`}
    >
      <head />
      <body className="bg-[#fafafa]">
        <header id="header" className="z-20">
          <Header />
        </header>

        <main>{children}</main>
        <footer id="footer" className="">
          <Footer />
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
