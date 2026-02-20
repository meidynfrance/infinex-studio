import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { Approach } from "@/components/home/Approach";
import { WhyNow } from "@/components/home/WhyNow";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Approach />
      <WhyNow />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
