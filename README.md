# 🚚 Food Truck - Landing Page Template

Template landing page multipágina para Food Trucks. Diseño moderno, responsive y completamente personalizable.

## ✨ Características

- 🎨 **Diseño moderno** con paleta naranja/amarillo
- 📱 **100% Responsive** (mobile, tablet, desktop)
- ⚡ **Tailwind CSS** vía CDN (fácil personalización)
- 🧩 **8 páginas** independientes para mejor SEO
- 🎭 **Animaciones suaves** con IntersectionObserver
- 🖼️ **Galería con lightbox** y filtros por categoría
- 🍔 **Menú dinámico** con filtros por categoría
- 📝 **Formulario de contacto** con validación JS
- 🍪 **Sin dependencias** externas (solo Tailwind CDN)

## 📁 Estructura

```
food-truck-01/
├── index.html              # Inicio (Hero + destacados)
├── about.html              # Sobre Nosotros
├── menu.html               # Menú / Precios
├── services.html           # Servicios
├── gallery.html            # Galería
├── contact.html            # Contacto (form + mapa + horarios)
├── privacy.html            # Políticas de Privacidad
├── terms.html              # Términos y Condiciones
└── assets/
    ├── css/styles.css      # Estilos globales + animaciones
    ├── js/
    │   ├── data.js         # ⚠️ EDITABLE: Mock data centralizada
    │   ├── main.js         # Navbar + scroll + mobile menu
    │   ├── menu.js         # Filtros y render de menú
    │   ├── gallery.js      # Filtros y lightbox
    │   ├── contact.js      # Validación formulario
    │   ├── about.js        # Render about
    │   └── services.js     # Render servicios
    └── images/             # (vacío, se usan URLs externas)
```

## 🚀 Cómo usar

1. **Abrir el proyecto**: Abre `index.html` en tu navegador favorito.
2. **Servidor local** (opcional, recomendado):
   ```bash
   # Con Python
   python -m http.server 8000
   # Con Node.js
   npx serve
   ```
3. **Personalizar**: Edita `assets/js/data.js` para cambiar todo el contenido.

## ✏️ Personalización Rápida

### Cambiar textos, menú, galería, contacto

Todo se centraliza en **`assets/js/data.js`**:

```js
const MOCK_DATA = {
  brand: {
    name: "Tu Nombre",           // Cambia el nombre de tu food truck
    tagline: "Tu tagline",       // Eslogan
    email: "tu@email.com",
    phone: "+52 ...",
    address: "Tu dirección"
  },
  // ...
};
```

### Cambiar colores

Los colores están definidos en **`tailwind.config`** (dentro de cada HTML):

```js
colors: {
  primary: '#FF6B35',   // Naranja principal
  secondary: '#F7931E', // Amarillo
  accent: '#7CB342',    // Verde
  dark: '#1F2937',      // Gris oscuro
  light: '#FFF8F0'      // Fondo cálido
}
```

Y en **`assets/css/styles.css`** (variables CSS):

```css
:root {
  --primary: #FF6B35;
  --primary-dark: #E55A24;
  /* ... */
}
```

### Cambiar imágenes

Las imágenes vienen de URLs (Unsplash). Para reemplazarlas:

1. **Opción 1**: Edita las URLs en `data.js` con tus propias imágenes.
2. **Opción 2**: Descarga imágenes locales y reemplaza las URLs por rutas relativas (`assets/images/tu-imagen.jpg`).

### Cambiar la paleta visual general

Modifica las clases de Tailwind en los HTMLs. Las clases principales son:
- `bg-primary`, `text-primary`, `border-primary` (naranja)
- `bg-secondary`, `text-secondary` (amarillo)
- `bg-accent`, `text-accent` (verde)
- `bg-dark`, `text-dark` (gris oscuro)

## 📝 Estructura de la Data Mockeada

### Brand
Información general del food truck.

### Stats
Números animados en "Sobre Nosotros".

### About
Historia, misión, visión y valores.

### Menu
- `categories`: Categorías del menú
- `items`: Array de productos con `{ id, category, name, price, description, image, badge }`

### Services
- `items`: Servicios ofrecidos con icono, título, descripción y características
- `process`: Pasos del proceso de catering

### Gallery
- `categories`: Filtros de galería
- `images`: Array con `{ id, category, src, alt }`

## 🎨 Animaciones Incluidas

- **Fade In / Up**: Texto y elementos
- **Float**: Hero image flotante
- **Bounce In**: Badges y elementos decorativos
- **Scroll Reveal**: Elementos aparecen al hacer scroll
- **Pulse Slow**: Decoraciones del hero
- **Lightbox**: Galería a pantalla completa con teclado
- **Contador animado**: Estadísticas numéricas

## 🌐 Compatibilidad

- ✅ Chrome / Edge / Safari (últimas versiones)
- ✅ Firefox
- ✅ Mobile Safari / Chrome Android
- ⚠️ IE11 no soportado (Tailwind 3 requiere navegadores modernos)

## 📦 Despliegue

El template es 100% estático. Puedes desplegarlo en:

- **Netlify**: Arrastra la carpeta
- **Vercel**: Importa el proyecto
- **GitHub Pages**: Sube a un repo
- **Hosting tradicional**: Sube vía FTP

## 🔧 Próximos Pasos para Producción

### Problema conocido resuelto ✅

Si las secciones inyectadas dinámicamente (Nuestros Valores, Nuestros Servicios, Estadísticas) no aparecían:

**Causa**: El `IntersectionObserver` inicial solo observaba los elementos `.reveal` presentes en el DOM al cargar. Las secciones inyectadas por JS después quedaban con `opacity: 0` para siempre.

**Solución implementada**: Se refactorizó `main.js` exponiendo `window.observeRevealElements()` como función global. Cada script que inyecta contenido (`about.js`, `services.js`, `menu.js`, `gallery.js`) llama a esta función después de poblar su contenedor, garantizando que todo se vuelva visible al hacer scroll.

### Tareas para producción

1. Reemplazar imágenes de Unsplash por imágenes propias
2. Cambiar el mapa embed en `contact.html` por tu ubicación real
3. Personalizar textos legales (`privacy.html` y `terms.html`) con tu abogado
4. Configurar el formulario de contacto con un backend real (PHP, Node, etc.) o servicio como [Formspree](https://formspree.io/)
5. Migrar de Tailwind CDN a una build local con PostCSS para mejor performance
6. Optimizar imágenes y agregar `srcset` para responsive

## 📄 Licencia

Template de uso libre. Personaliza y usa según tus necesidades.

---

**¿Dudas o sugerencias?** Edita libremente este template.
