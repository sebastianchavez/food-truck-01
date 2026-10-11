// ============================================
// SERVICES JS - Food Truck Template
// Render services and process steps
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderProcess();
});

function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;
  container.innerHTML = MOCK_DATA.services.items.map((service, idx) => `
    <div class="bg-light p-8 rounded-2xl hover:shadow-xl transition-all reveal" style="animation-delay: ${idx * 0.1}s">
      <div class="text-6xl mb-4">${service.icon}</div>
      <h3 class="text-2xl font-bold mb-3">${service.title}</h3>
      <p class="text-gray-700 mb-5 leading-relaxed">${service.description}</p>
      <ul class="space-y-2">
        ${service.features.map(f => `
          <li class="flex items-center text-gray-700">
            <svg class="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            ${f}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  // Observe newly injected reveal elements
  const reveals = container.querySelectorAll('.reveal');
  if (reveals.length > 0 && window.observeRevealElements) {
    window.observeRevealElements(reveals);
  }
}

function renderProcess() {
  const container = document.getElementById('process-container');
  if (!container) return;
  container.innerHTML = MOCK_DATA.services.process.map((step, idx) => `
    <div class="text-center reveal" style="animation-delay: ${idx * 0.15}s">
      <div class="relative inline-block">
        <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-extrabold mb-4">${step.step}</div>
        ${idx < 2 ? '<div class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary opacity-30"></div>' : ''}
      </div>
      <h3 class="text-2xl font-bold mb-2">${step.title}</h3>
      <p class="text-gray-600">${step.description}</p>
    </div>
  `).join('');

  // Observe newly injected reveal elements
  const reveals = container.querySelectorAll('.reveal');
  if (reveals.length > 0 && window.observeRevealElements) {
    window.observeRevealElements(reveals);
  }
}

