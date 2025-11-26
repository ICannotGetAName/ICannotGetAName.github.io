i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    backend: {
      loadPath: 'locales/{{lng}}.json' // 从站点根目录加载 locales
    }
  }, function(err, t) {
    updateContent();
  });

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = i18next.t(key); // 获取翻译内容
    if (value) {
      el.innerText = value; // 更新文本
    }
  });
}


function changeLanguage(language) {
  i18next.changeLanguage(language, function (err, t) {
    if (err) return console.error('Something went wrong loading', err);
    updateContent();
  });
}
