"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { useUtm } from "@/hooks/useUtm";
import type { UgcFormationData } from "@/lib/validations";

export function ProspectionFormationForm() {
  const t = useTranslations("formationProspection");
  const locale = useLocale();
  const getUtm = useUtm();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UgcFormationData>();

  async function onSubmit(data: UgcFormationData) {
    setStatus("sending");
    try {
      const response = await fetch("/api/formation-prospection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, utm: getUtm() }),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <p className="text-lg text-green-400">{t("form.success")}</p>
        <p className="mt-3 text-sm text-text-secondary">{t("form.successDetail")}</p>
      </div>
    );
  }

  const inputStyles =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500";
  const errorStyles = "mt-1 text-sm text-red-400";
  const labelStyles = "block text-sm font-medium mb-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="prosp-firstName" className={labelStyles}>
            {t("form.firstName")}
          </label>
          <input
            id="prosp-firstName"
            type="text"
            placeholder={t("form.firstNamePlaceholder")}
            className={inputStyles}
            {...register("firstName", { required: t("validation.firstNameRequired") })}
          />
          {errors.firstName && <p className={errorStyles}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="prosp-lastName" className={labelStyles}>
            {t("form.lastName")}
          </label>
          <input
            id="prosp-lastName"
            type="text"
            placeholder={t("form.lastNamePlaceholder")}
            className={inputStyles}
            {...register("lastName", { required: t("validation.lastNameRequired") })}
          />
          {errors.lastName && <p className={errorStyles}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="prosp-email" className={labelStyles}>
          {t("form.email")}
        </label>
        <input
          id="prosp-email"
          type="email"
          placeholder={t("form.emailPlaceholder")}
          className={inputStyles}
          {...register("email", {
            required: t("validation.emailRequired"),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t("validation.emailInvalid"),
            },
          })}
        />
        {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="prosp-phone" className={labelStyles}>
          {t("form.phone")}
        </label>
        <input
          id="prosp-phone"
          type="tel"
          placeholder={t("form.phonePlaceholder")}
          className={inputStyles}
          {...register("phone", { required: t("validation.phoneRequired") })}
        />
        {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="prosp-company" className={labelStyles}>
          {t("form.company")}
        </label>
        <input
          id="prosp-company"
          type="text"
          placeholder={t("form.companyPlaceholder")}
          className={inputStyles}
          {...register("company", { required: t("validation.companyRequired") })}
        />
        {errors.company && <p className={errorStyles}>{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="prosp-participants" className={labelStyles}>
          {t("form.participants")}
        </label>
        <select
          id="prosp-participants"
          className={`${inputStyles} cursor-pointer`}
          defaultValue=""
          {...register("participants", { required: t("validation.participantsRequired") })}
        >
          <option value="" disabled>
            {t("form.participantsPlaceholder")}
          </option>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={String(i + 1)}>
              {i + 1} {i === 0 ? t("form.person") : t("form.persons")}
            </option>
          ))}
        </select>
        {errors.participants && <p className={errorStyles}>{errors.participants.message}</p>}
      </div>

      <Button type="submit" variant="green" size="lg" className="w-full btn-shimmer" disabled={status === "sending"}>
        {status === "sending" ? t("form.sending") : t("form.submit")}
      </Button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">{t("form.error")}</p>
      )}
    </form>
  );
}
