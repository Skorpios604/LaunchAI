"use client";

import AnimatedShaderHero from "@/components/ui/animated-shader-hero";

export default function Hero() {
  const handlePrimaryClick = () => {
    const applySection = document.getElementById("apply");
    if (applySection) applySection.scrollIntoView({ behavior: "smooth" });
  };

  const handleSecondaryClick = () => {
    const howSection = document.getElementById("how");
    if (howSection) howSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedShaderHero
      trustBadge={{
        text: "Now Enrolling — Cohort 1",
        icons: ["🚀"]
      }}
      headline={{
        line1: "ESCAPE TUTORIALS",
        line2: "BUILD REAL PRODUCTS"
      }}
      subtitle="Stop watching courses. Start building production AI with real teams. Ship LLM apps, train models, and walk away with a portfolio that proves you can do the job."
      buttons={{
        primary: {
          text: "Apply Now",
          onClick: handlePrimaryClick
        },
        secondary: {
          text: "See How It Works",
          onClick: handleSecondaryClick
        }
      }}
      id="hero"
    />
  );
}
