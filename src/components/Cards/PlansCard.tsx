"use client";
import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import { Plan } from "@/types/plan.js";

type Props = {
  plan: Plan;
};

const PlansCard = ({ plan }: Props) => {
  return (
    <section
      className={`w-[260px] md:w-96 relative bg-white rounded-2xl overflow-hidden transition-all transform hover:scale-105 duration-300 ${
        plan.recommended
          ? "shadow-recommended-card-shadow lg:mb-8 border-none"
          : "shadow-card-shadow border-2 border-[#E3F0E8] "
      }`}
    >
      {plan.recommended && (
        <article className="w-full h-9 absolute">
          <div className="bg-custom-gradient max-h-9 text-center font-medium text-white py-2 shadow-recommended-top-shadow">
            PLAN RECOMENDADO
          </div>
        </article>
      )}
      <article className="p-6 pt-8 lg:pt-12 md:py-6 md:px-12 space-y-4 md:space-y-5 lg:space-y-6">
        <div className="h-16 lg:h-20">
          <h4 className="text-center text-2xl md:text-3xl lg:text-4xl md:font-semibold md:leading-10 font-bold text-[#334155] h-full content-center">
            {plan.title}
          </h4>
        </div>
        {/* Features */}
        <div className="space-y-4">
          <ul className="space-y-4">
            {plan.features.map((f, i) => (
              <li key={i}>
                <p className="text-sm md:text-base md:leading-5 inline-flex items-center text-[#475569] gap-2">
                  {/* <HiOutlineWifi className="h-6 w-6" /> */}
                  {f.icon}
                  {f.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* Separator */}
        <span className="w-full h-[1.5px] min-h-[1.5px] md:min-h-0.5 md:w-64 md:h-0.5 md:opacity-95 md:mx-auto bg-separator-gradient flex opacity-80"></span>
        {/* Price Section */}
        <div className="text-center space-y-4 md:space-y-6">
          <ul className="text-[#475569] text-sm md:text-base md:leading-5">
            <li>
              <p>{plan.note}</p>
            </li>
            <li className="italic">{plan.memberPrice}</li>
          </ul>
          <h4 className="text-[#334155] text-2xl font-bold md:text-3xl lg:text-4xl md:leading-10 md:font-semibold">
            {plan.price}
          </h4>
        </div>
        {/* Button */}
        <div className="py-0.5 px-1">
          {plan.recommended ? (
            <button className="bg-custom-gradient rounded-2xl text-lg leading-6 font-medium text-white w-full my-1 lg:my-0 py-3 px-6 shadow-button-shadow">
              CONTRATAR
            </button>
          ) : (
            <SecondaryButton rounded="full" className="w-full">
              CONTRATAR
            </SecondaryButton>
          )}
        </div>
        {/* Footer Note */}
        <h5 className="text-[#475569] text-center text-sm italic">
          « Promo nuevos clientes »
        </h5>
      </article>
    </section>
  );
};

export default PlansCard;
