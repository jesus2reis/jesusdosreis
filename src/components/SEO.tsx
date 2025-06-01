
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Jesús dos Reis - Diseñador Visual y Desarrollador Frontend",
  description = "Portfolio de Jesús dos Reis, especialista en diseño visual, desarrollo frontend y experiencias digitales innovadoras.",
  image = "/placeholder.svg",
  url = "https://jesusdosreis.com",
  type = "website",
  author = "Jesús dos Reis"
}) => {
  const fullTitle = title.includes("Jesús dos Reis") ? title : `${title} | Jesús dos Reis`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Jesús dos Reis Portfolio" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="ES" />
      
      {/* Structured Data for Portfolio */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jesús dos Reis",
          "jobTitle": "Diseñador Visual y Desarrollador Frontend",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            // Add social media links here when available
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
