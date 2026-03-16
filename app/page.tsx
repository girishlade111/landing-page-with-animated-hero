import PhotographyBanner from "@/components/photography-banner"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "AI Builders",
            "description": "Master AI and machine learning with hands-on projects. Join monthly classes taught by industry experts.",
            "url": "https://aibuilders.com",
            "logo": "https://aibuilders.com/images/logo.png",
            "image": "https://aibuilders.com/images/og-image.png",
            "sameAs": [
              "https://facebook.com/aibuilders",
              "https://instagram.com/aibuilders",
              "https://twitter.com/aibuilders",
              "https://github.com/aibuilders"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "areaServed": "Worldwide",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dublin",
              "addressCountry": "IE"
            },
            "areaServed": "Worldwide",
            "courseMode": "online",
            "educationalLevel": "Beginner to Advanced",
            "educationalCredentialAwarded": "Certificate of Completion",
            "offers": {
              "@type": "Offer",
              "category": "Paid",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI Builders",
            "url": "https://aibuilders.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://aibuilders.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <PhotographyBanner />
      <Footer />
    </>
  )
}
