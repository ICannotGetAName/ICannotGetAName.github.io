i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    backend: {
      loadPath: 'locales/{{lng}}.json'  // ← 注意这里没有 "../"，因为 index.html 在根目录
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
    if (err) return console.error('Language loading error:', err);
    updateContent();
  });
}
