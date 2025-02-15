import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Fast Delivery",
    description:
      "Guarantee: “We’ll deliver most small-to-mid projects within a month—or we’ll discount your next invoice.”",
  },
  {
    icon: "/icons/design.svg",
    title: "Design & Development",
    description:
      "Guarantee: “We use the latest tech and frameworks to ensure modern, secure, and efficient solutions—every time.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Scalability + Maintenance ",
    description: "Guarantee: “We build with your future in mind—free scaling consultations for the life of your project.” ",
  },
  {
    icon: "/icons/team.svg",
    title: "Team of Experts",
    description: "Guarantee: “Certified pros and vetted specialists at your service—no compromises on skill or experience.”",
  },
  {
    icon: "/icons/safe.svg",
    title: "Secure Building",
    description:
      "Guarantee: “Every line of code undergoes security checks to protect your data and your users.”",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Analytics Tracking",
    description: "Guarantee: “Real-time analytics integrated by default—so you can see measurable ROI from day one.”",
  },

  {
    icon: "/icons/flexible.svg",
    title: "Dynamic Websites",
    description: "Guarantee: “Built for easy content updates and ongoing enhancements—no complex coding required from your side.”",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description:
      "Guarantee: “We’re on call round the clock—urgent fixes or questions get priority response within two hours.”",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Guarantee: “Competitive rates that reflect our global talent pool—no hidden fees, ever.”",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our guarantees to you.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
