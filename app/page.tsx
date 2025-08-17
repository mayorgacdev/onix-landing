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
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Companies />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Section />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Questions />
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
