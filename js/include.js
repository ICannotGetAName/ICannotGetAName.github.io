// include.js — simple fragment injector
async function loadFragment(id, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load ' + url);
    const html = await res.text();
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

async function injectSiteShell() {
  // root-absolute paths so includes work from any page
  await Promise.all([
    loadFragment('site-nav', '/includes/nav.html'),
    loadFragment('site-footer', '/includes/footer.html')
  ]);

  // set current date in any injected footer
  const dateEl = document.getElementById('current-date');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString();
  }

  // If i18next is available and initialized, translate data-i18n attributes
  if (window.i18next && typeof window.i18next.t === 'function') {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const txt = window.i18next.t ? window.i18next.t(key) : '';
      if (txt) el.innerText = txt;
    });
  }

  // If a page defines updateContent (older pages), call it to ensure translations update
  if (typeof window.updateContent === 'function') {
    try { window.updateContent(); } catch (e) { /* ignore */ }
  }
}

// Run injection as soon as DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectSiteShell);
} else {
  injectSiteShell();
}
