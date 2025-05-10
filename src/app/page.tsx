"use client";

import {
  Banner,
  PlansSection,
  Faqs,
  Service,
  ContactForm,
  PartnerCarousel,
  AboutUs,
  Sucursal,
  ButtonUploadBanner,
  Loader
} from "@/components";


import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
        <Banner />
        <ButtonUploadBanner />
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
