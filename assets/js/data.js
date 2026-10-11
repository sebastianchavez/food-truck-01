// ============================================
// MOCK DATA - Food Truck Template
// Centralized data for easy customization
// ============================================

const MOCK_DATA = {
  brand: {
    name: "Food Truck",
    tagline: "Sabores sobre ruedas",
    description: "El mejor food truck de Santiago, ofreciendo comida callejera gourmet con ingredientes frescos y sabores inolvidables.",
    email: "info@foodtruck.cl",
    phone: "+56 9 1234 5678",
    whatsapp: "+56 9 1234 5678",
    address: "Av. Libertador Bernardo O'Higgins 123, Santiago Centro, Chile",
    social: {
      facebook: "https://facebook.com/foodtruck",
      instagram: "https://instagram.com/foodtruck",
      twitter: "https://twitter.com/foodtruck",
      tiktok: "https://tiktok.com/@foodtruck"
    }
  },

  schedule: {
    weekdays: "Lunes a Viernes: 11:00 - 22:00 hrs",
    weekend: "Sábado y Domingo: 10:00 - 23:00 hrs",
    closed: "Cerrado los martes"
  },

  stats: [
    { number: 5, suffix: "+", label: "Años de experiencia" },
    { number: 12000, suffix: "+", label: "Clientes satisfechos" },
    { number: 300, suffix: "+", label: "Eventos servidos" },
    { number: 50, suffix: "+", label: "Platillos en menú" }
  ],

  about: {
    title: "Sobre Nosotros",
    subtitle: "Pasión por la comida callejera",
    story: "Nacimos en 2019 en las calles de Santiago con una misión simple: llevar comida deliciosa, rápida y de calidad a cada rincón de la ciudad. Lo que comenzó como un sueño sobre ruedas se ha convertido en una de las experiencias gastronómicas más queridas por los capitalinos. Cada platillo es preparado al momento con ingredientes frescos y de productores locales chilenos, garantizando sabor y frescura en cada bocado.",
    mission: "Ofrecer comida callejera gourmet que combine tradición, sabor y conveniencia, llevando experiencias gastronómicas únicas a la comunidad chilena.",
    vision: "Ser el food truck líder en la Región Metropolitana, reconocidos por nuestra calidad, innovación y compromiso con Chile y su cultura culinaria.",
    values: [
      { icon: "🌱", title: "Producto Chileno", description: "Trabajamos con productores locales chilenos: verduras de la Vega Central, carnes del sur y pan de panaderías artesanales." },
      { icon: "❤️", title: "Hecho a la Chilena", description: "Cada platillo es preparado con cariño, dedicación y el sabor típico de nuestra tierra." },
      { icon: "⚡", title: "Servicio Rápido", description: "Comida deliciosa sin esperas largas, ideal para el ritmo acelerado de la ciudad." },
      { icon: "♻️", title: "Compromiso Verde", description: "Embalajes compostables y prácticas sustentables para cuidar el medio ambiente de Chile." }
    ]
  },

  menu: {
    title: "Nuestro Menú",
    subtitle: "Precios y sabores únicos",
    categories: [
      { id: "tacos", name: "Tacos", icon: "🌮" },
      { id: "burgers", name: "Hamburguesas", icon: "🍔" },
      { id: "drinks", name: "Bebidas", icon: "🥤" },
      { id: "desserts", name: "Postres", icon: "🍰" }
    ],
    items: [
      // TACOS
      {
        id: 1, category: "tacos", name: "Tacos al Pastor", price: 4500,
        description: "Tres tacos con carne de cerdo marinado en achiote, piña, cebolla y cilantro fresco.",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80",
        badge: "Más Vendido"
      },
      {
        id: 2, category: "tacos", name: "Tacos de Carnitas", price: 4200,
        description: "Carne de cerdo confitada con cebolla, cilantro y nuestra salsa verde casera estilo sureño.",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&q=80"
      },
      {
        id: 3, category: "tacos", name: "Tacos Veganos", price: 3800,
        description: "Tacos de jackfruit con guacamole, frijoles negros y pico de gallo.",
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500&q=80",
        badge: "Vegano"
      },
      {
        id: 4, category: "tacos", name: "Tacos de Pescado", price: 5000,
        description: "Pescado fresco empanizado con repollo morado, chipotle y lima.",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80"
      },

      // BURGERS
      {
        id: 5, category: "burgers", name: "Classic Burger", price: 8500,
        description: "Carne angus, queso cheddar, lechuga, tomate, cebolla y salsa especial de la casa.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
        badge: "Clásico"
      },
      {
        id: 6, category: "burgers", name: "BBQ Bacon Burger", price: 9500,
        description: "Doble carne, tocino ahumado, cebolla caramelizada y salsa BBQ estilo sureño.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80",
        badge: "Más Vendido"
      },
      {
        id: 7, category: "burgers", name: "Mushroom Burger", price: 8800,
        description: "Hongos portobello grillados, queso suizo y alioli de trufa. 100% vegetariano.",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80",
        badge: "Veggie"
      },
      {
        id: 8, category: "burgers", name: "Spicy Jalapeño", price: 9200,
        description: "Carne angus, jalapeños frescos, pepper jack y chipotle mayo.",
        image: "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=500&q=80"
      },

      // DRINKS
      {
        id: 9, category: "drinks", name: "Limonada de Maracuyá", price: 2800,
        description: "Limonada natural con pulpa de maracuyá fresca y un toque de menta.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80",
        badge: "Refrescante"
      },
      {
        id: 10, category: "drinks", name: "Té de Hibisco Frío", price: 2500,
        description: "Té de jamaica endulzado con miel chilena y rodajas de naranja.",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&q=80"
      },
      {
        id: 11, category: "drinks", name: "Cerveza Artesanal Chilena", price: 3500,
        description: "Selección de cervezas artesanales chilenas. Pregunta por las opciones del día.",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&q=80",
        badge: "18+"
      },
      {
        id: 12, category: "drinks", name: "Agua Mineral", price: 1800,
        description: "Agua mineral con gas y rodajas de limón del norte de Chile.",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&q=80"
      },

      // DESSERTS
      {
        id: 13, category: "desserts", name: "Churros con Chocolate", price: 3500,
        description: "Churros crujientes con azúcar y canela, bañados en chocolate caliente.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
        badge: "Más Vendido"
      },
      {
        id: 14, category: "desserts", name: "Helado Artesanal", price: 3800,
        description: "Helado artesanal de vainilla con toppings a elegir: chocolate, frutilla o caramelo.",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80"
      },
      {
        id: 15, category: "desserts", name: "Brownie Caliente", price: 4200,
        description: "Brownie de chocolate tibio con helado de vainilla y salsa caliente.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80"
      }
    ]
  },

  services: {
    title: "Nuestros Servicios",
    subtitle: "Más que comida, experiencias",
    items: [
      {
        icon: "🎉",
        title: "Catering para Eventos",
        description: "Llevamos nuestro food truck a tu evento especial en Santiago y regiones. Bodas, cumpleaños y más.",
        features: ["Menú personalizado", "Servicio completo", "Personal capacitado"]
      },
      {
        icon: "🏢",
        title: "Eventos Corporativos",
        description: "Solución gastronómica ideal para reuniones de empresa, lanzamientos y conferencias en Chile.",
        features: ["Factura chilena", "Opciones variadas", "Servicio profesional"]
      },
      {
        icon: "🎊",
        title: "Fiestas Privadas",
        description: "Haz tu fiesta inolvidable con nuestra comida. Atendemos desde 20 hasta 500 personas.",
        features: ["Capacidad flexible", "Decoración temática", "DJ opcional"]
      },
      {
        icon: "🚚",
        title: "Food Truck Móvil",
        description: "Contrata nuestro food truck para ubicarlo donde lo necesites durante horas o días.",
        features: ["Ubicación a elección", "Operación completa", "Eventos largos"]
      }
    ],
    process: [
      { step: 1, title: "Contáctanos", description: "Cuéntanos sobre tu evento y necesidades específicas." },
      { step: 2, title: "Planificamos", description: "Diseñamos un menú personalizado y propuesta detallada." },
      { step: 3, title: "¡A Disfrutar!", description: "Llegamos puntuales y nos encargamos de todo." }
    ]
  },

  gallery: {
    title: "Galería",
    subtitle: "Momentos que cuentan historias",
    categories: [
      { id: "all", name: "Todas" },
      { id: "food", name: "Comida" },
      { id: "truck", name: "Food Truck" },
      { id: "events", name: "Eventos" },
      { id: "customers", name: "Clientes" }
    ],
    images: [
      { id: 1, category: "food", src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80", alt: "Tacos gourmet" },
      { id: 2, category: "truck", src: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&q=80", alt: "Food truck en evento" },
      { id: 3, category: "events", src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80", alt: "Evento corporativo" },
      { id: 4, category: "food", src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", alt: "Hamburguesa artesanal" },
      { id: 5, category: "customers", src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80", alt: "Clientes felices" },
      { id: 6, category: "truck", src: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=800&q=80", alt: "Food truck de noche" },
      { id: 7, category: "food", src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80", alt: "Tacos de pescado" },
      { id: 8, category: "events", src: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&q=80", alt: "Boda con food truck" },
      { id: 9, category: "food", src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80", alt: "BBQ Burger" },
      { id: 10, category: "customers", src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80", alt: "Personas disfrutando" },
      { id: 11, category: "truck", src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80", alt: "Food truck amarillo" },
      { id: 12, category: "food", src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80", alt: "Churros con chocolate" }
    ]
  }
};

// Helper to format currency in Chilean Pesos
function formatCurrency(amount) {
  return `$${amount.toLocaleString('es-CL')} CLP`;
}
