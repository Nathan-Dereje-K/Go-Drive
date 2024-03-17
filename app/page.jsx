import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Card />
      <Hero />
      <div className="mt-60">
        <Footer />
      </div>
    </main>
  );
}
