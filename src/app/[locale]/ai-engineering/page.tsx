import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { EngineeringPage } from "./EngineeringPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "engineering" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function Page({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return <EngineeringPage />;
}
