"use client";
import React from "react";
import { clsx } from "clsx";
import SecondaryButton from "../Buttons/SecondaryButton";
import { PlanCardProps } from "@/types/priceCards";
import AnimatedButton from "../Buttons/OrangeButtonCta";
import Link from "next/link";

type CardVariant = "default" | "recommended" | "compact";

type Props = {
  plan: PlanCardProps;
  variant?: CardVariant;
  showPromoNote?: boolean;
  link?: string;
};

const PricesCard = ({
  plan,
  variant = "default",
  showPromoNote = true,
  link = "#",
}: Props) => {
  // Configuración de variantes
  const isCompact = variant === "compact";
  const isRecommended = variant === "recommended" || plan.recommended;

  return (
    <section
      className={clsx(
        // Base styles
        "relative mx-2 lg:mx-0 bg-white rounded-2xl",
        // Width variants
        isCompact ? "w-[240px] lg:w-80" : "w-[260px] lg:w-96",
        // Hover animation - scale + translate
        "transform-gpu transition-all duration-300 ease-out",
        "lg:hover:scale-105",
        // Shadow variants
        isRecommended
          ? [
              "shadow-recommended-card-shadow lg:mb-4 mb-6 border-none",
              "lg:hover:shadow-2xl lg:hover:-translate-y-2",
            ]
          : [
              "shadow-card-shadow",
              "lg:hover:shadow-xl lg:hover:-translate-y-1",
            ],
      )}
      style={{
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "subpixel-antialiased",
      }}
    >
      {isRecommended && (
        <article className="w-full h-9 absolute rounded-t-2xl overflow-hidden">
          <div className="bg-custom-gradient max-h-9 text-center font-medium text-white py-2 shadow-recommended-top-shadow">
            PLAN RECOMENDADO
          </div>
        </article>
      )}

      <article
        className={clsx(
          // Padding variants
          isCompact ? "p-4 py-6" : "p-6 pt-8 lg:pt-12 md:py-6 lg:px-12",
          // Spacing variants
          isCompact ? "space-y-3" : "space-y-4 md:space-y-5 lg:space-y-6",
          // overflow-hidden movido aquí si es necesario
          "rounded-2xl",
        )}
      >
        {/* Title */}
        <div className={isCompact ? "h-12 md:h-14" : "h-16 lg:h-20"}>
          <h4
            className={clsx(
              "text-center md:font-semibold md:leading-10 font-bold text-textFaqs-primary h-full content-center",
              isCompact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl",
            )}
          >
            {plan.title}
          </h4>
        </div>

        {/* Features */}
        <div className={isCompact ? "space-y-2" : "space-y-4"}>
          <ul
            className={
              isCompact ? "space-y-2 text-start" : "space-y-4 text-start"
            }
          >
            {plan.features.map((f, i) => (
              <li key={i}>
                <p
                  className={clsx(
                    "md:leading-5 inline-flex items-center text-descriptionServices gap-2",
                    isCompact ? "text-xs md:text-sm" : "text-sm md:text-base",
                  )}
                >
                  {f.icon}
                  {f.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Separator */}
        <div className="w-full h-[1.5px] md:h-0.5 bg-separator-gradient opacity-80" />

        {/* Price Section */}
        <div
          className={clsx(
            "text-center",
            isCompact ? "space-y-3" : "space-y-4 md:space-y-6",
          )}
        >
          <ul
            className={clsx(
              "text-descriptionServices md:leading-5",
              isCompact ? "text-xs md:text-sm" : "text-sm md:text-base",
            )}
          >
            <li>
              <p>{plan.note}</p>
            </li>
            <li className="italic">{plan.memberPrice}</li>
          </ul>
          <h4
            className={clsx(
              "text-textFaqs-primary md:leading-10 md:font-semibold",
              isCompact
                ? "text-xl md:text-2xl font-bold"
                : "text-2xl font-bold md:text-3xl lg:text-4xl",
            )}
          >
            {plan.price}
          </h4>
        </div>

        {/* Button */}
        <div className="py-0.5 px-1">
          <Link href={link}>
            {isRecommended || isCompact ? (
              <AnimatedButton
                className="w-full"
                rounded={isCompact ? "full" : undefined}
              >
                CONTRATAR
              </AnimatedButton>
            ) : (
              <SecondaryButton rounded="full" className="w-full">
                CONTRATAR
              </SecondaryButton>
            )}
          </Link>
        </div>

        {/* Footer Note - Conditional */}
        {showPromoNote && (
          <h5
            className={clsx(
              "text-descriptionServices text-center italic",
              isCompact ? "text-xs" : "text-sm",
            )}
          >
            « Promo nuevos clientes »
          </h5>
        )}
      </article>
    </section>
  );
};

export default PricesCard;
