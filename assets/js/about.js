// ============================================
// ABOUT JS - Food Truck Template
// Render about page stats and values
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderValues();
});

function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;
  container.innerHTML = MOCK_DATA.stats.map(stat => `
    <div class="reveal">
      <div class="text-5xl md:text-6xl font-extrabold mb-2 counter" data-target="${stat.number}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
      <p class="text-lg opacity-90">${stat.label}</p>
    </div>
  `).join('');

  // Wire up counters (counters animate via global observer from main.js)
  const counters = container.querySelectorAll('.counter');
  if (counters.length > 0 && window.observeCounters) {
    window.observeCounters(counters);
  }
}

function renderValues() {
  const container = document.getElementById('values-container');
  if (!container) return;
  container.innerHTML = MOCK_DATA.about.values.map((value, idx) => `
    <div class="bg-light p-6 rounded-2xl reveal" style="animation-delay: ${idx * 0.1}s">
      <div class="text-5xl mb-4">${value.icon}</div>
      <h3 class="text-xl font-bold mb-2">${value.title}</h3>
      <p class="text-gray-600">${value.description}</p>
    </div>
  `).join('');

  // Observe the newly injected reveal elements
  const reveals = container.querySelectorAll('.reveal');
  if (reveals.length > 0 && window.observeRevealElements) {
    window.observeRevealElements(reveals);
  }
}

