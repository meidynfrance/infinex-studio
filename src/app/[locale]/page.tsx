import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { Approach } from "@/components/home/Approach";
import { ValueProp } from "@/components/home/ValueProp";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQSchema } from "@/components/structured-data/FAQSchema";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "faq" });
  const faqItems = Array.from({ length: 6 }, (_, i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <>
      <FAQSchema items={faqItems} />
      <Hero />
      <Approach />
      <ValueProp />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
