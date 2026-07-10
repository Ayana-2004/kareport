import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyKerala from '../components/WhyKerala';
import Features from '../components/Features';
import Journey from '../components/Journey';
import Certifications from '../components/Certifications';
import Progress from '../components/Progress';
import Enquiry from '../components/Enquiry';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Accreditations from '../components/Accreditations';
import DoctorProfiles from '../components/DoctorProfiles';
// This is the entire page. Because it does no data fetching and holds no
// state of its own, it can stay a plain server component — Next.js renders
// it to HTML on the server, and only EnquiryForm "hydrates" into an
// interactive client component in the browser.
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Accreditations/>
      <WhyKerala />
      <Features />
      <Journey />
      <Certifications />
      <DoctorProfiles />
      <Progress />
      <Testimonials />
      <Enquiry />
      <Footer />
    </main>
  );
}
