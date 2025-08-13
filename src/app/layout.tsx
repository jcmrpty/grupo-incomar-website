import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

// ✅ METADATA API NEXT.JS 15 - SEO completo para Grupo Incomar
export const metadata: Metadata = {
  // Meta básicos optimizados (Checklist #1)
  title: 'Freight Forwarding Panamá | Grupo Incomar Logística Internacional',
  description: 'Grupo Incomar - Freight forwarding y logística internacional desde Panamá. +25 años en transporte de carga marítima, importación y exportación para empresas en Centroamérica.',
  
  // Keywords estratégicas para freight forwarding
  keywords: [
    'freight forwarding Panamá',
    'logística internacional Centroamérica', 
    'transporte de carga marítima',
    'agente de carga Panamá',
    'importación exportación Guatemala',
    'despacho aduanero Costa Rica',
    'consolidación de carga Nicaragua',
    'shipping Panamá',
    'Grupo Incomar freight forwarder'
  ],
  
  // Robots y canonical (Checklist #1)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://grupo-incomar.com',
  },
  
  // Open Graph optimizado (Checklist #1)
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://grupo-incomar.com',
    siteName: 'Grupo Incomar',
    title: 'Freight Forwarding Panamá | Grupo Incomar Logística Internacional',
    description: 'Grupo Incomar - Freight forwarding y logística internacional desde Panamá. +25 años especializados en transporte de carga marítima para empresas centroamericanas.',
    images: [
      {
        url: 'https://grupo-incomar.com/images/grupo-incomar-freight-forwarding-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Grupo Incomar - Freight Forwarding y Logística Internacional Panamá Centroamérica'
      }
    ],
  },
  
  // Twitter Cards optimizado (Checklist #1)
  twitter: {
    card: 'summary_large_image',
    title: 'Freight Forwarding Panamá | Grupo Incomar Logística Internacional',
    description: 'Freight forwarding y logística internacional desde Panamá. +25 años en transporte de carga marítima para empresas centroamericanas.',
    images: ['https://grupo-incomar.com/images/grupo-incomar-freight-forwarding-twitter.jpg'],
  },
  
  // Meta adicionales para LLMs (Checklist #1)
  authors: [{ name: 'Grupo Incomar' }],
  creator: 'Grupo Incomar',
  publisher: 'Grupo Incomar',
  
  // Verificación y otras metas
  verification: {
    google: 'tu-google-verification-code',
    yandex: 'tu-yandex-verification-code',
  },
  
  // Favicon (Checklist #1)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Meta para geo-targeting (Checklist GEO)
  other: {
    'geo.region': 'PA-GT-CR-NI',
    'geo.placename': 'Panamá, Guatemala, Costa Rica, Nicaragua',
    'geo.position': '8.9824;-79.5199',
    'ICBM': '8.9824, -79.5199',
    'coverage': 'Central America',
    'target': 'Business',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'theme-color': '#3574E3',
    'msapplication-TileColor': '#3574E3',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Schema.org Organization + LocalBusiness optimizado (Checklist GEO #2)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Grupo Incomar",
    "alternateName": "Grupo Incomar Freight Forwarding",
    "url": "https://grupo-incomar.com",
    "logo": "https://grupo-incomar.com/images/logo-incomar.png",
    "description": "Empresa líder en freight forwarding y logística internacional desde Panamá hacia Centroamérica. Especialistas en transporte de carga marítima, importación y exportación con +25 años de experiencia.",
    "foundingDate": "1999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vía Ricardo J. Alfaro, Edif. Century Tower, Piso 12, Of. 1206",
      "addressLocality": "Ciudad de Panamá",
      "addressRegion": "Panamá",
      "postalCode": "0801",
      "addressCountry": "PA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+507-6634-0008",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"],
      "areaServed": ["PA", "GT", "CR", "NI", "HN", "SV"]
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Panamá"
      },
      {
        "@type": "Country", 
        "name": "Guatemala"
      },
      {
        "@type": "Country",
        "name": "Costa Rica"
      },
      {
        "@type": "Country",
        "name": "Nicaragua"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Freight Forwarding",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Freight Forwarding Internacional",
            "description": "Servicios integrales de freight forwarding y gestión logística para importación y exportación"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transporte de Carga Marítima",
            "description": "Transporte especializado de contenedores y carga consolidada vía marítima"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Despacho Aduanero",
            "description": "Gestión completa de trámites aduaneros y documentación internacional"
          }
        }
      ]
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Schema.org structured data (Checklist GEO #2) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Preconnect para optimización (Checklist #7) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}