import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className=" text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <CTA />
      <BackToTop />
      <Footer />
    </div>
  );
}
