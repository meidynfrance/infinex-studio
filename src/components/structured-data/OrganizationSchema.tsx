export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Infinex",
    url: "https://infinex.studio",
    description:
      "AI consulting for SMBs — audit, deployment, and training. Concrete results in weeks.",
    foundingDate: "2025",
    areaServed: ["FR", "BE", "CH", "CA"],
    serviceType: [
      "AI Consulting",
      "Business Process Automation",
      "AI Training",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://infinex.studio/en/get-started",
      availableLanguage: ["French", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
