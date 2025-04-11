import { Banner,PlansSection, AboutUsBanner, Faqs, Service,  ContactForm, PartnerCarousel} from "@/components";

export default function Home() {
  return (
    <>
      <Banner/>
      <PlansSection />
      <PartnerCarousel />
      <Service/>
      <AboutUsBanner />
      <Faqs />
      <ContactForm />
    </>
  );
}

