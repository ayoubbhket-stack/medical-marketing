function toggleLang() {
  const html = document.getElementById('html-root');
  const body = document.body;
  const btn = document.getElementById('langBtn');
  const isArabic = html.getAttribute('lang') === 'ar';

  const targetLang = isArabic ? 'en' : 'ar';
  html.setAttribute('lang', targetLang);
  html.setAttribute('dir', targetLang === 'ar' ? 'rtl' : 'ltr');
  body.classList.toggle('ar-mode', targetLang === 'ar');
  btn.textContent = targetLang === 'ar' ? 'English' : 'العربية';

  document.querySelectorAll('[data-en]').forEach(el => {
    const text = targetLang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    if (text !== null) {
      el.innerHTML = text;
    }
  });

  localStorage.setItem('jma-lang', targetLang);
}

// Apply saved language preference on load
(function(){
  const saved = localStorage.getItem('jma-lang');
  if (saved === 'ar') {
    document.addEventListener('DOMContentLoaded', function(){
      toggleLang();
    });
  }
})();
