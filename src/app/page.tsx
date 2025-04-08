import { Faqs } from "@/components";
import AboutUsBanner from "@/components/about/AboutUsBanner";
import ContactForm from "@/components/Form/ContactForm";

export default function Home() {
  return (
    <>
      <AboutUsBanner />
      <Faqs />
      <ContactForm />
    </>
  );
}

