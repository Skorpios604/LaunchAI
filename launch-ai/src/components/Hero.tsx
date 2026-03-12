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
        text: "System Online // Cohort 1 Active",
        icons: ["🚀"]
      }}
      headline={{
        line1: "BUILD FUTURE APPS",
        line2: "WITH REAL SQUADS"
      }}
      subtitle="Escape tutorial. Enter the matrix of production-grade engineering. Ship LLM architectures, construct vector pipelines, and compile a verifiable portfolio."
      buttons={{
        primary: {
          text: "Deploy Application",
          onClick: handlePrimaryClick
        },
        secondary: {
          text: "View Architecture",
          onClick: handleSecondaryClick
        }
      }}
      id="hero"
    />
  );
}
