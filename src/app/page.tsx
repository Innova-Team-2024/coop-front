"use client";

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

import Loader from "@/components/Loader/Loader";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
        <Banner />
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <PlansSection />
          <PartnerCarousel />
          <Service />
          <AboutUs />
          <Faqs />
          <ContactForm />
          <Sucursal />
        </>
      )}
    </>
  );
}
