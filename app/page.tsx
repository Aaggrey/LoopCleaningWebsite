import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import ClientLogos from "@/components/home/ClientLogos";
import BookingSection from "@/components/home/BookingSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <WhyChooseUs />
      <PricingSection />
      <Testimonials />
      <BlogPreview />
      <ClientLogos />
      <BookingSection />
    </>
  );
}