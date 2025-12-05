import type { ReactNode } from 'react';

type StructuredDataProps = {
  data: Record<string, unknown>;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EHM Technology Services',
    url: 'https://www.ehmtechservices.com',
    logo: 'https://www.ehmtechservices.com/images/ehm-logo.png',
    description:
      'Professional Engineering Design, Cost Estimation, AI Automation, Web Development & Digital Services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office#205, 2nd floor, Regency Plaza Opposite PIA Office',
      addressLocality: 'Faisalabad',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-322-628-3848',
      contactType: 'Customer Service',
      email: 'info@ehmtechservices.com',
      areaServed: 'PK',
      availableLanguage: ['en', 'ur'],
    },
    sameAs: [
      'https://linkedin.com/company/ehm-tech-services',
      'https://facebook.com/ehmtechservices',
      'https://instagram.com/ehmtechservices',
      'https://twitter.com/ehmtechservices',
    ],
  };

  return <StructuredData data={schema} />;
}

// Service Schema
export function ServiceSchema({
  name,
  description,
  provider,
}: {
  name: string;
  description: string;
  provider?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || 'EHM Technology Services',
      url: 'https://www.ehmtechservices.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    serviceType: 'Professional Services',
  };

  return <StructuredData data={schema} />;
}

// FAQ Schema
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={schema} />;
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={schema} />;
}

// LocalBusiness Schema (alternative to Organization)
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'EHM Technology Services',
    image: 'https://www.ehmtechservices.com/images/ehm-logo.png',
    '@id': 'https://www.ehmtechservices.com',
    url: 'https://www.ehmtechservices.com',
    telephone: '+92-322-628-3848',
    email: 'info@ehmtechservices.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office#205, 2nd floor, Regency Plaza Opposite PIA Office',
      addressLocality: 'Faisalabad',
      addressRegion: 'Punjab',
      postalCode: '38000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.4504,
      longitude: 73.1350,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
  };

  return <StructuredData data={schema} />;
}

