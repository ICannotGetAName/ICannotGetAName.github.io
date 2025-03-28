i18next
  .use(i18nextHttpBackend) // ← 你可能忘了这一行！
  .use(i18nextBrowserLanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    backend: {
      loadPath: 'locales/{{lng}}.json' // ← 这个路径对 index.html 是正确的
    }
  }, function(err, t) {
    updateContent();
  });

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = i18next.t(key);
    if (value) el.innerText = value;
  });
}

function changeLanguage(language) {
  i18next.changeLanguage(language, function (err, t) {
    if (err) return console.error('Something went wrong loading', err);
    updateContent();
  });
}
