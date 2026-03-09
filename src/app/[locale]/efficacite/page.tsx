import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ServiceLanding } from "@/components/services/ServiceLanding";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "efficacite" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function EfficacitePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServiceLanding namespace="efficacite" theme="blue" />;
}
