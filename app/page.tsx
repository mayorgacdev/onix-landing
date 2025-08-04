import {
  About,
  Companies,
  Footer,
  Gallery,
  Hero,
  Section,
  Testimonials,
} from "@/components/features";
import ContactUs from "@/components/features/contact";
import Questions from "@/components/features/question";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Companies />
      <Gallery />
      <Section />
      <Testimonials />
      <Questions />
      <ContactUs />
      <Footer />
    </>
  );
}
