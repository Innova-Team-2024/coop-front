import {
  Banner,
  PlansSection,
  Faqs,
  Service,
  ContactForm,
  PartnerCarousel,
  AboutUs,
} from "@/components";
import Sucursal from "@/components/Sucursal/Sucursal";

export default function Home() {
  return (
    <>
      <Banner />
      <PlansSection />
      <PartnerCarousel />
      <Service />
      <AboutUs />
      <Faqs />
      <ContactForm />
      <Sucursal />
    </>
  );
}

