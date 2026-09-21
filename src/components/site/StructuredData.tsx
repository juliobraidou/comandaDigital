import { FAQS } from "@/data/faq";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// Os preços espelham exatamente o que está visível em Pricing.tsx — schema que
// diverge do conteúdo da página é motivo de penalização.
const PLANS = [
  { name: "Balcão", price: "89", description: "Até 10 mesas, app do garçom e tela da cozinha." },
  { name: "Salão", price: "169", description: "Mesas ilimitadas, relatórios e controle de turnos." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-horizontal-branco.png`,
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android, iOS",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: PLANS.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        price: plan.price,
        priceCurrency: "BRL",
        category: "subscription",
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
