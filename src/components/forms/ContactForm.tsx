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
        <div className="text-4xl mb-4">&#10003;</div>
        <p className="text-lg text-green-400">{t("form.success")}</p>
      </div>
    );
  }

  const inputStyles =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary placeholder:text-text-secondary/50 transition-colors focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary";
  const errorStyles = "mt-1 text-sm text-red-400";
  const labelStyles = "block text-sm font-medium mb-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelStyles}>
            {t("form.firstName")}
          </label>
          <input
            id="firstName"
            type="text"
            placeholder={t("form.firstNamePlaceholder")}
            className={inputStyles}
            {...register("firstName", { required: t("validation.firstNameRequired") })}
          />
          {errors.firstName && <p className={errorStyles}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelStyles}>
            {t("form.lastName")}
          </label>
          <input
            id="lastName"
            type="text"
            placeholder={t("form.lastNamePlaceholder")}
            className={inputStyles}
            {...register("lastName", { required: t("validation.lastNameRequired") })}
          />
          {errors.lastName && <p className={errorStyles}>{errors.lastName.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelStyles}>
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

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelStyles}>
          {t("form.phone")}
        </label>
        <input
          id="phone"
          type="tel"
          placeholder={t("form.phonePlaceholder")}
          className={inputStyles}
          {...register("phone", { required: t("validation.phoneRequired") })}
        />
        {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
      </div>

      {/* Company + Job Title */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className={labelStyles}>
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
        <div>
          <label htmlFor="jobTitle" className={labelStyles}>
            {t("form.jobTitle")}
          </label>
          <input
            id="jobTitle"
            type="text"
            placeholder={t("form.jobTitlePlaceholder")}
            className={inputStyles}
            {...register("jobTitle", { required: t("validation.jobTitleRequired") })}
          />
          {errors.jobTitle && <p className={errorStyles}>{errors.jobTitle.message}</p>}
        </div>
      </div>

      {/* Revenue */}
      <div>
        <label htmlFor="revenue" className={labelStyles}>
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
          <option value="<500K">{t("form.revenueOptions.under500k")}</option>
          <option value="500K-2M">{t("form.revenueOptions.500kTo2m")}</option>
          <option value="2M-10M">{t("form.revenueOptions.2mTo10m")}</option>
          <option value="10M-50M">{t("form.revenueOptions.10mTo50m")}</option>
          <option value=">50M">{t("form.revenueOptions.over50m")}</option>
        </select>
        {errors.revenue && <p className={errorStyles}>{errors.revenue.message}</p>}
      </div>

      {/* Service Interest */}
      <div>
        <label className={labelStyles}>
          {t("form.service")}
        </label>
        <div className="grid grid-cols-2 gap-3">
          {(["audit", "deployment", "training", "all"] as const).map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 cursor-pointer transition-colors hover:border-accent-primary has-[:checked]:border-accent-primary"
            >
              <input
                type="checkbox"
                value={option}
                className="h-4 w-4 accent-accent-primary"
                {...register("service", { required: t("validation.serviceRequired") })}
              />
              <span className="text-sm">{t(`form.serviceOptions.${option}`)}</span>
            </label>
          ))}
        </div>
        {errors.service && <p className={errorStyles}>{errors.service.message}</p>}
      </div>

      {/* Needs */}
      <div>
        <label htmlFor="needs" className={labelStyles}>
          {t("form.needs")}
        </label>
        <textarea
          id="needs"
          rows={4}
          placeholder={t("form.needsPlaceholder")}
          className={`${inputStyles} resize-none`}
          {...register("needs", {
            required: t("validation.needsRequired"),
            minLength: {
              value: 10,
              message: t("validation.needsMin"),
            },
          })}
        />
        {errors.needs && <p className={errorStyles}>{errors.needs.message}</p>}
      </div>

      {/* Source */}
      <div>
        <label htmlFor="source" className={labelStyles}>
          {t("form.source")}
        </label>
        <select
          id="source"
          className={`${inputStyles} cursor-pointer`}
          defaultValue=""
          {...register("source", { required: t("validation.sourceRequired") })}
        >
          <option value="" disabled>
            {t("form.sourceOptions.placeholder")}
          </option>
          <option value="google">{t("form.sourceOptions.google")}</option>
          <option value="linkedin">{t("form.sourceOptions.linkedin")}</option>
          <option value="referral">{t("form.sourceOptions.referral")}</option>
          <option value="social">{t("form.sourceOptions.social")}</option>
          <option value="event">{t("form.sourceOptions.event")}</option>
          <option value="other">{t("form.sourceOptions.other")}</option>
        </select>
        {errors.source && <p className={errorStyles}>{errors.source.message}</p>}
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
