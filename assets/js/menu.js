// ============================================
// MENU JS - Food Truck Template
// Filter and render menu items dynamically
// ============================================

// SVG fallback when an external image fails to load
const FALLBACK_SVG = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23FF6B35'/%3E%3Cstop offset='1' stop-color='%23F7931E'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' font-size='90' text-anchor='middle' dominant-baseline='middle'%3E🚚%3C/text%3E%3Ctext x='50%25' y='85%25' font-size='18' text-anchor='middle' fill='white' font-family='sans-serif'%3EFood Truck%3C/text%3E%3C/svg%3E`;

document.addEventListener('DOMContentLoaded', () => {
  renderMenuFilters();
  renderMenuItems('all');

  // Attach handlers AFTER elements have been rendered
  const filterButtons = document.querySelectorAll('.menu-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenuItems(btn.dataset.category);
    });
  });
});

function renderMenuFilters() {
  const container = document.getElementById('menu-filters');
  if (!container) return;
  const categories = [{ id: 'all', name: 'Todos', icon: '🍽️' }, ...MOCK_DATA.menu.categories];

  container.innerHTML = categories.map(cat => `
    <button
      data-category="${cat.id}"
      class="menu-filter-btn filter-btn px-6 py-2 rounded-full font-semibold border-2 border-primary ${cat.id === 'all' ? 'active' : ''}">
      <span class="mr-2">${cat.icon}</span>${cat.name}
    </button>
  `).join('');
}

function renderMenuItems(category) {
  const container = document.getElementById('menu-grid');
  if (!container) return;

  const items = category === 'all'
    ? MOCK_DATA.menu.items
    : MOCK_DATA.menu.items.filter(i => i.category === category);

  container.innerHTML = items.map(item => `
    <div class="menu-card bg-white rounded-2xl overflow-hidden shadow-md reveal">
      <div class="relative h-48 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_SVG}';" />
        ${item.badge ? `<span class="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">${item.badge}</span>` : ''}
      </div>
      <div class="p-5">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold text-dark">${item.name}</h3>
          <span class="text-primary font-bold text-lg whitespace-nowrap ml-2">${formatCurrency(item.price)}</span>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed">${item.description}</p>
      </div>
    </div>
  `).join('');

  // Observe newly injected reveal elements
  const reveals = container.querySelectorAll('.reveal');
  if (reveals.length > 0 && window.observeRevealElements) {
    window.observeRevealElements(reveals);
  }
}
