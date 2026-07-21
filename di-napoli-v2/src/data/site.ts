// Site configuration
export const siteConfig = {
  name: 'Di Napoli',
  description: 'Gelateria e cafeteria artesanal desde 1987. Sorvetes e cafés feitos com alma, servidos com excelência.',
  url: 'https://dinapoli.com.br',
  ogImage: '/assets/og-image.webp',
  locale: 'pt-BR',
  twitterHandle: '@dinapoli',
  themeColor: '#942225',
  manifest: {
    name: 'Di Napoli - Tradição Artesanal',
    short_name: 'Di Napoli',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff8f7',
    theme_color: '#942225'
  }
};

// SEO metadata per page
export const seo = {
  home: {
    title: 'Di Napoli | Gelateria & Cafeteria Artesanal desde 1987',
    description: 'Experimente o verdadeiro gelato artesanal e cafés especiais na Di Napoli. Tradição italiana desde 1987 em São Paulo. Ambiente acolhedor, ingredientes nobres.',
    keywords: 'gelateria, cafeteria, gelato artesanal, café especial, São Paulo, Di Napoli, sorveteria, 1987',
    canonical: 'https://dinapoli.com.br/'
  }
};

// JSON-LD structured data
export const jsonLd = {
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Di Napoli Gelateria & Cafeteria',
    description: 'Gelateria e cafeteria artesanal desde 1987. Sorvetes e cafés feitos com alma, servidos com excelência.',
    url: 'https://dinapoli.com.br',
    telephone: '+55-11-4567-8901',
    email: 'contato@dinapoli.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua das Flores, 1987',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01000-000',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.550,
      longitude: -46.633
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '22:00'
      }
    ],
    priceRange: '$$',
    servesCuisine: ['Italian', 'Dessert', 'Coffee'],
    paymentAccepted: 'Cash, Credit Card, Debit Card, PIX',
    currenciesAccepted: 'BRL',
    hasMenu: 'https://dinapoli.com.br/#menu',
    sameAs: [
      'https://instagram.com/dinapoli',
      'https://facebook.com/dinapoli',
      'https://pinterest.com/dinapoli'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247'
    },
    image: [
      'https://dinapoli.com.br/assets/hero-bg.webp',
      'https://dinapoli.com.br/assets/ambiente.webp'
    ]
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://dinapoli.com.br/'
      }
    ]
  }
};

// Product data
export const products = [
  {
    name: 'Gelato Pistache Siciliano',
    description: 'Pistaches de Bronte, Sicilia. Textura aveludada, sabor intenso e autêntico.',
    price: 'R$ 24',
    image: '/assets/gelato-pistache.webp',
    alt: 'Gelato de pistache siciliano em taça de cristal, cor verde natural, textura cremosa',
    badge: 'Gelato do Mês',
    featured: true
  },
  {
    name: 'Espresso Clássico',
    description: 'Blend exclusivo 100% Arábica. Corpo médio, notas de chocolate e caramelo.',
    price: 'R$ 12',
    image: '/assets/espresso.webp',
    alt: 'Xícara de porcelana com espresso cremoso, crema dourada, grãos de café ao lado',
    badge: 'Café da Casa',
    featured: true
  },
  {
    name: 'Tiramisù Tradicional',
    description: 'Mascarpone artesanal, café espresso, biscoito savoiardi, cacau belga.',
    price: 'R$ 28',
    image: '/assets/tiramisu.webp',
    alt: 'Fatia de tiramisù tradicional em prato branco, camadas visíveis, cacau polvilhado',
    badge: 'Doces Artesanais',
    featured: true
  },
  {
    name: 'Gelato Stracciatella',
    description: 'Base de creme de leite fresco, lascas de chocolate belga 70% cacau.',
    price: 'R$ 22',
    image: '/assets/stracciatella.webp',
    alt: 'Gelato stracciatella com lascas de chocolate visíveis, textura cremosa',
    badge: 'Clássico'
  },
  {
    name: 'Cappuccino Artesanal',
    description: 'Espresso duplo, leite vaporizado microespuma, cacau em pó.',
    price: 'R$ 16',
    image: '/assets/cappuccino.webp',
    alt: 'Cappuccino com latte art de coração, xícara branca, espuma cremosa',
    badge: 'Favorito'
  },
  {
    name: 'Affogato Di Napoli',
    description: 'Gelato de baunilha de Madagascar, espresso quente, amaretto artesanal.',
    price: 'R$ 26',
    image: '/assets/affogato.webp',
    alt: 'Affogato em taça de vidro, gelato de baunilha, espresso sendo despejado, biscoito ao lado',
    badge: 'Especialidade'
  }
];

// Reviews data
export const reviews = [
  {
    text: 'O melhor gelato que já provei fora da Itália. O pistache siciliano é transcendental. Ambiente impecável.',
    author: 'Marina R.',
    initials: 'MR',
    source: 'Google Reviews · 2 semanas atrás'
  },
  {
    text: 'Finalmente um café de verdade em São Paulo. O espresso tem corpo, aroma e a crema perfeita. Virei cliente fixo.',
    author: 'Carlos M.',
    initials: 'CM',
    source: 'TripAdvisor · 1 mês atrás'
  },
  {
    text: 'Levei minha família no domingo e foi uma experiência completa. Atendimento atencioso, espaço lindo e sobremesas inesquecíveis.',
    author: 'Fernanda L.',
    initials: 'FL',
    source: 'Instagram · 3 dias atrás'
  }
];