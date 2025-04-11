import {
  Banner,
  PlansSection,
  Faqs,
  Service,
  ContactForm,
  PartnerCarousel,
  AboutUs,
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
    </>
  );
}

