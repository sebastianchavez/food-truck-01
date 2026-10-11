// ============================================
// GALLERY JS - Food Truck Template
// Filter and lightbox functionality
// ============================================

let currentLightboxIndex = 0;
let filteredImages = [];

// SVG fallback when an external image fails to load
const FALLBACK_SVG = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23FF6B35'/%3E%3Cstop offset='1' stop-color='%23F7931E'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' font-size='90' text-anchor='middle' dominant-baseline='middle'%3E🚚%3C/text%3E%3Ctext x='50%25' y='85%25' font-size='18' text-anchor='middle' fill='white' font-family='sans-serif'%3EFood Truck%3C/text%3E%3C/svg%3E`;

document.addEventListener('DOMContentLoaded', () => {
  renderGalleryFilters();
  renderGallery('all');

  // Close lightbox on overlay click
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
});

function renderGalleryFilters() {
  const container = document.getElementById('gallery-filters');
  if (!container) return;
  container.innerHTML = MOCK_DATA.gallery.categories.map(cat => `
    <button
      data-category="${cat.id}"
      class="filter-btn px-5 py-2 rounded-full font-semibold border-2 border-primary ${cat.id === 'all' ? 'active' : ''}">
      ${cat.name}
    </button>
  `).join('');

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.category);
    });
  });
}

function renderGallery(category) {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  filteredImages = category === 'all'
    ? MOCK_DATA.gallery.images
    : MOCK_DATA.gallery.images.filter(img => img.category === category);

  container.innerHTML = filteredImages.map((img, idx) => `
    <div class="gallery-item rounded-xl overflow-hidden aspect-square reveal" data-index="${idx}">
      <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_SVG}';" />
      <div class="gallery-overlay">
        <p class="font-semibold text-lg">${img.alt}</p>
        <p class="text-sm capitalize opacity-80">${img.category}</p>
      </div>
    </div>
  `).join('');

  // Click handlers
  container.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      currentLightboxIndex = parseInt(item.dataset.index, 10);
      openLightbox();
    });
  });

  // Observe newly injected reveal elements
  const reveals = container.querySelectorAll('.reveal');
  if (reveals.length > 0 && window.observeRevealElements) {
    window.observeRevealElements(reveals);
  }
}

function openLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || filteredImages.length === 0) return;
  updateLightboxImage();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  if (filteredImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + direction + filteredImages.length) % filteredImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const current = filteredImages[currentLightboxIndex];
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = current.src;
      img.alt = current.alt;
      img.style.opacity = '1';
    }, 150);
  }
  if (caption) caption.textContent = current.alt;
}
