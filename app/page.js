import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyKerala from '../components/WhyKerala';
import Features from '../components/Features';
import Journey from '../components/Journey';
import Certifications from '../components/Certifications';
import Progress from '../components/Progress';
import Enquiry from '../components/Enquiry';
import Footer from '../components/Footer';

// This is the entire page. Because it does no data fetching and holds no
// state of its own, it can stay a plain server component — Next.js renders
// it to HTML on the server, and only EnquiryForm "hydrates" into an
// interactive client component in the browser.
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyKerala />
      <Features />
      <Journey />
      <Certifications />
      <Progress />
      <Enquiry />
      <Footer />
    </main>
  );
}
