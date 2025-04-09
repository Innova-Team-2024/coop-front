import { Faqs, Service } from "@/components";
import { Banner } from "@/components/";
import AboutUsBanner from "@/components/about/AboutUsBanner";
import ContactForm from "@/components/Form/ContactForm";

export default function Home() {
  return (
    <>
      <Banner/>
      <Service/>
      <AboutUsBanner />
      <Faqs />
      <ContactForm />
    </>
  );
}

