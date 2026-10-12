import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Menu from "@/components/menu/Menu";
import Location from "@/components/location/Location";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Location />
      </main>
      <Footer />
    </>
  );
}
