"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { useUtm } from "@/hooks/useUtm";
import type { UgcFormationData } from "@/lib/validations";

export function UgcFormationForm() {
  const t = useTranslations("formationUgc");
  const locale = useLocale();
  const utm = useUtm();
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
      const response = await fetch("/api/formation-ugc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, utm }),
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
          <label htmlFor="ugc-firstName" className={labelStyles}>
            {t("form.firstName")}
          </label>
          <input
            id="ugc-firstName"
            type="text"
            placeholder={t("form.firstNamePlaceholder")}
            className={inputStyles}
            {...register("firstName", { required: t("validation.firstNameRequired") })}
          />
          {errors.firstName && <p className={errorStyles}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="ugc-lastName" className={labelStyles}>
            {t("form.lastName")}
          </label>
          <input
            id="ugc-lastName"
            type="text"
            placeholder={t("form.lastNamePlaceholder")}
            className={inputStyles}
            {...register("lastName", { required: t("validation.lastNameRequired") })}
          />
          {errors.lastName && <p className={errorStyles}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="ugc-email" className={labelStyles}>
          {t("form.email")}
        </label>
        <input
          id="ugc-email"
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
        <label htmlFor="ugc-phone" className={labelStyles}>
          {t("form.phone")}
        </label>
        <input
          id="ugc-phone"
          type="tel"
          placeholder={t("form.phonePlaceholder")}
          className={inputStyles}
          {...register("phone", { required: t("validation.phoneRequired") })}
        />
        {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="ugc-company" className={labelStyles}>
          {t("form.company")}
        </label>
        <input
          id="ugc-company"
          type="text"
          placeholder={t("form.companyPlaceholder")}
          className={inputStyles}
          {...register("company", { required: t("validation.companyRequired") })}
        />
        {errors.company && <p className={errorStyles}>{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="ugc-participants" className={labelStyles}>
          {t("form.participants")}
        </label>
        <select
          id="ugc-participants"
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

      <div>
        <label className={labelStyles}>
          {t("form.sessionDate")}
        </label>
        <div className="space-y-2">
          {([0, 1, 2, 3, 4] as const).map((i) => {
            const isFull = t(`form.sessions.${i}.full`) === "true";
            return (
              <label
                key={i}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                  isFull
                    ? "border-red-500/20 bg-red-500/5 cursor-not-allowed"
                    : "border-border bg-surface cursor-pointer hover:border-green-500 has-[:checked]:border-green-500"
                }`}
              >
                <input
                  type="radio"
                  value={t(`form.sessions.${i}.value`)}
                  disabled={isFull}
                  className="h-4 w-4 accent-green-500"
                  {...register("sessionDate", { required: t("validation.sessionDateRequired") })}
                />
                <span className={`text-sm ${isFull ? "line-through text-text-secondary" : "text-text-primary"}`}>
                  {t(`form.sessions.${i}.label`)}
                </span>
                {isFull && (
                  <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-400/15 px-2.5 py-1 rounded">
                    {t("form.sessionFull")}
                  </span>
                )}
              </label>
            );
          })}
        </div>
        {errors.sessionDate && <p className={errorStyles}>{errors.sessionDate.message}</p>}
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
