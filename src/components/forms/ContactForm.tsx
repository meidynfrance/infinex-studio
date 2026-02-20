"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import type { ContactFormData } from "@/lib/validations";

export function ContactForm() {
  const t = useTranslations("getStarted");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
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
        <div className="text-4xl mb-4">✓</div>
        <p className="text-lg text-green-400">{t("form.success")}</p>
      </div>
    );
  }

  const inputStyles =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary";
  const errorStyles = "mt-1 text-sm text-red-400";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t("form.name")}
        </label>
        <input
          id="name"
          type="text"
          placeholder={t("form.namePlaceholder")}
          className={inputStyles}
          {...register("name", { required: t("validation.nameRequired") })}
        />
        {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t("form.email")}
        </label>
        <input
          id="email"
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

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          {t("form.company")}
        </label>
        <input
          id="company"
          type="text"
          placeholder={t("form.companyPlaceholder")}
          className={inputStyles}
          {...register("company", { required: t("validation.companyRequired") })}
        />
        {errors.company && <p className={errorStyles}>{errors.company.message}</p>}
      </div>

      {/* Revenue */}
      <div>
        <label htmlFor="revenue" className="block text-sm font-medium mb-2">
          {t("form.revenue")}
        </label>
        <select
          id="revenue"
          className={`${inputStyles} cursor-pointer`}
          defaultValue=""
          {...register("revenue", { required: t("validation.revenueRequired") })}
        >
          <option value="" disabled>
            {t("form.revenueOptions.placeholder")}
          </option>
          <option value="<1M">{t("form.revenueOptions.lessThan1M")}</option>
          <option value="1M-5M">{t("form.revenueOptions.from1Mto5M")}</option>
          <option value="5M-25M">{t("form.revenueOptions.from5Mto25M")}</option>
          <option value="25M+">{t("form.revenueOptions.moreThan25M")}</option>
        </select>
        {errors.revenue && <p className={errorStyles}>{errors.revenue.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t("form.message")}
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder={t("form.messagePlaceholder")}
          className={`${inputStyles} resize-none`}
          {...register("message", {
            required: t("validation.messageRequired"),
            minLength: {
              value: 10,
              message: t("validation.messageMin"),
            },
          })}
        />
        {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? t("form.sending") : t("form.submit")}
      </Button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">{t("form.error")}</p>
      )}
    </form>
  );
}
