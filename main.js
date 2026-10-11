<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Términos y Condiciones | Food Truck</title>
  <meta name="description" content="Términos y condiciones de Food Truck. Conoce las reglas que rigen el uso de nuestro sitio y servicios." />

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { primary: '#FF6B35', 'primary-dark': '#E55A24', secondary: '#F7931E', accent: '#7CB342', dark: '#1F2937', light: '#FFF8F0' },
          fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/styles.css" />
</head>
<body class="font-sans bg-white text-dark antialiased">

  <!-- ============ NAVBAR ============ -->
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <a href="index.html" class="flex items-center space-x-2">
          <span class="text-3xl">🚚</span>
          <span class="font-extrabold text-2xl text-dark">Food<span class="text-primary">Truck</span></span>
        </a>
        <div class="hidden md:flex items-center space-x-8">
          <a href="index.html" class="text-dark hover:text-primary font-semibold transition">Inicio</a>
          <a href="about.html" class="text-dark hover:text-primary font-semibold transition">Sobre Nosotros</a>
          <a href="menu.html" class="text-dark hover:text-primary font-semibold transition">Menú</a>
          <a href="services.html" class="text-dark hover:text-primary font-semibold transition">Servicios</a>
          <a href="gallery.html" class="text-dark hover:text-primary font-semibold transition">Galería</a>
          <a href="contact.html" class="text-dark hover:text-primary font-semibold transition">Contacto</a>
          <a href="contact.html" class="bg-primary hover:bg-primary-dark text-white font-bold px-5 py-2 rounded-full transition">Ordena Ya</a>
        </div>
        <button id="mobile-menu-btn" class="md:hidden text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div id="mobile-menu" class="mobile-menu md:hidden bg-white border-t">
        <div class="flex flex-col py-4 space-y-3 px-4">
          <a href="index.html" class="text-dark hover:text-primary font-semibold py-2">Inicio</a>
          <a href="about.html" class="text-dark hover:text-primary font-semibold py-2">Sobre Nosotros</a>
          <a href="menu.html" class="text-dark hover:text-primary font-semibold py-2">Menú</a>
          <a href="services.html" class="text-dark hover:text-primary font-semibold py-2">Servicios</a>
          <a href="gallery.html" class="text-dark hover:text-primary font-semibold py-2">Galería</a>
          <a href="contact.html" class="text-dark hover:text-primary font-semibold py-2">Contacto</a>
          <a href="contact.html" class="bg-primary text-white font-bold px-5 py-2 rounded-full text-center">Ordena Ya</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- ============ HERO ============ -->
  <section class="hero-gradient pt-32 pb-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
      <span class="text-primary font-bold uppercase tracking-wider text-sm">Legal</span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-dark mt-3 mb-3">Términos y Condiciones</h1>
      <p class="text-gray-600">Última actualización: Enero 2026</p>
    </div>
  </section>

  <!-- ============ CONTENIDO ============ -->
  <section class="py-16 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">1. Aceptación de los Términos</h2>
        <p class="text-gray-700 leading-relaxed">Al acceder y utilizar el sitio web de <strong>Food Truck</strong> y nuestros servicios, aceptas cumplir y estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestro sitio o servicios.</p>
      </div>

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">2. Uso del Servicio</h2>
        <p class="text-gray-700 leading-relaxed mb-3">Nuestro servicio consiste en ofrecer comida callejera gourmet y servicios de catering. Al utilizar nuestros servicios, te comprometes a:</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>Proporcionar información veraz y actualizada.</li>
          <li>No utilizar el servicio para fines ilegales o no autorizados.</li>
          <li>No intentar acceder a sistemas o información no autorizados.</li>
          <li>Respetar los horarios establecidos y las políticas del local.</li>
        </ul>
      </div>

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">3. Pedidos y Pagos</h2>
        <p class="text-gray-700 leading-relaxed mb-3">Los pedidos están sujetos a disponibilidad. Nos reservamos el derecho de:</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>Rechazar pedidos por falta de stock.</li>
          <li>Modificar precios sin previo aviso.</li>
          <li>Cancelar pedidos por causas justificadas.</li>
        </ul>
        <p class="text-gray-700 leading-relaxed mt-3">Los pagos se procesan a través de proveedores seguros. No almacenamos información de tarjetas.</p>
      </div>

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">4. Servicio de Catering</h2>
        <p class="text-gray-700 leading-relaxed">Para contrataciones de catering o eventos privados:</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>Se requiere reserva con al menos 7 días de anticipación.</li>
          <li>El anticipo del 50% es necesario para confirmar.</li>
          <li>Cancelaciones con menos de 48 horas no son reembolsables.</li>
          <li>Las condiciones específicas se acuerdan por escrito.</li>
        </ul>
      </div>

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">5. Propiedad Intelectual</h2>
        <p class="text-gray-700 leading-relaxed">Todo el contenido de este sitio web (textos, imágenes, logos, diseños) es propiedad de Food Truck o sus proveedores y está protegido por leyes de propiedad intelectual. No puedes reproducir, distribuir o modificar el contenido sin autorización previa.</p>
      </div>

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">6. Limitaciones de Responsabilidad</h2>
        <p class="text-gray-700 leading-relaxed">Food Truck no se hace responsable por:</p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>Daños indirectos o consecuenciales derivados del uso del servicio.</li>
          <li>Interrupciones temporales del servicio por mantenimiento.</li>
          <li>Eventos fuera de nuestro control (clima, fuerza mayor).</li>
          <li>Reacciones alérgicas a ingredientes (es responsabilidad del cliente informar).</li>
        </ul>
      </div>

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">7. Enlaces de Terceros</h2>
        <p class="text-gray-700 leading-relaxed">Nuestro sitio puede contener enlaces a sitios de terceros. No somos responsables del contenido o prácticas de estos sitios. Te recomendamos leer sus términos y políticas.</p>
      </div>

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">8. Modificaciones</h2>
        <p class="text-gray-700 leading-relaxed">Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio. Es tu responsabilidad revisar periódicamente estos términos.</p>
      </div>

      <div class="reveal mb-8">
        <h2 class="text-2xl font-extrabold text-dark mb-3">9. Ley Aplicable y Jurisdicción</h2>
        <p class="text-gray-700 leading-relaxed">Estos términos se rigen por las <strong>leyes de la República de Chile</strong>, en especial por la Ley 19.496 sobre Protección al Consumidor y demás normativa aplicable. Cualquier disputa será resuelta por los <strong>tribunales competentes de Santiago de Chile</strong>, renunciando expresamente a cualquier otro fuero.</p>
      </div>

      <div class="reveal">
        <h2 class="text-2xl font-extrabold text-dark mb-3">10. Contacto</h2>
        <p class="text-gray-700 leading-relaxed">Si tienes preguntas sobre estos Términos y Condiciones, contáctanos:</p>
        <ul class="list-none mt-3 space-y-1 text-gray-700">
          <li><strong>Email:</strong> info@foodtruck.cl</li>
          <li><strong>Teléfono:</strong> +56 9 1234 5678</li>
          <li><strong>Dirección:</strong> Av. Libertador Bernardo O'Higgins 123, Santiago Centro, Chile</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ============ FOOTER ============ -->
  <footer class="bg-dark text-gray-300 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-3xl">🚚</span>
            <span class="font-extrabold text-2xl text-white">Food<span class="text-primary">Truck</span></span>
          </div>
          <p class="text-sm">Sabores sobre ruedas desde 2019.</p>
        </div>
        <div>
          <h4 class="font-bold text-white mb-4">Navegación</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="index.html" class="hover:text-primary transition">Inicio</a></li>
            <li><a href="about.html" class="hover:text-primary transition">Sobre Nosotros</a></li>
            <li><a href="menu.html" class="hover:text-primary transition">Menú</a></li>
            <li><a href="services.html" class="hover:text-primary transition">Servicios</a></li>
            <li><a href="gallery.html" class="hover:text-primary transition">Galería</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-4">Contacto</h4>
          <ul class="space-y-2 text-sm">
            <li>📍 Av. Libertador Bernardo O'Higgins 123</li>
            <li>📞 +56 9 1234 5678</li>
            <li>✉️ info@foodtruck.cl</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-4">Síguenos</h4>
          <div class="flex space-x-3 mb-4">
            <a href="#" class="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-primary transition">📘</a>
            <a href="#" class="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-primary transition">📷</a>
            <a href="#" class="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-primary transition">🐦</a>
          </div>
          <ul class="space-y-2 text-sm">
            <li><a href="privacy.html" class="hover:text-primary transition">Políticas de Privacidad</a></li>
            <li><a href="terms.html" class="hover:text-primary transition">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        <p>&copy; 2026 Food Truck. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
</body>
</html>




