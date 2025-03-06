import Navbar from "@/components/navbar";
import Hero3D from "@/components/hero-3d";
import FeaturesSection from "@/components/features-section";
import WorkspaceShowcase from "@/components/workspace-showcase";
import PricingPlans from "@/components/pricing-plans";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero3D />
      <FeaturesSection />
      <WorkspaceShowcase />
      <PricingPlans />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
