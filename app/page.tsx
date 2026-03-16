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
            "@type": "Organization",
            "name": "LadeStack",
            "description": "Transform your skills with cutting-edge AI education and hands-on projects.",
            "url": "https://ladestack.in",
            "logo": "https://ladestack.in/images/logo.png",
            "image": "https://ladestack.in/images/og-image.png",
            "sameAs": [
              "https://www.instagram.com/girish_lade_/",
              "https://www.linkedin.com/in/girish-lade-075bba201/",
              "https://github.com/girishlade111",
              "https://codepen.io/Girish-Lade-the-looper"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "admin@ladestack.in",
              "contactType": "customer service",
              "areaServed": "Worldwide",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "India",
              "addressCountry": "IN"
            },
            "areaServed": "Worldwide"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "LadeStack",
            "url": "https://ladestack.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ladestack.in/search?q={search_term_string}",
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
