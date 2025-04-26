import {
  Banner,
  PlansSection,
  Faqs,
  Service,
  ContactForm,
  PartnerCarousel,
  AboutUs,
  Sucursal
} from "@/components";

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

