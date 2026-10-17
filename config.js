/* ====== НАСТРОЙКИ САЙТА — меняйте только здесь ======
   BUY_URL  — куда ведут все кнопки «Купить»: чат Telegram с готовым текстом.
              Формат: https://t.me/ВАШ_НИК?text=<текст, закодированный для URL>
              (закодировать текст: https://www.urlencoder.org/ или encodeURIComponent в консоли браузера).
   TELEGRAM — ваш контакт (ссылки «Telegram» / «напишите»).
   PRICE    — цена, подставляется в кнопки и блок цены.
   Важно: те же ссылки продублированы в href в index.html (на случай, если JS отключён) —
   при замене поменяйте и там (поиск по тексту «t.me/GrifRift555»).
   Если меняете цену — поправьте её и в тексте сообщения внутри BUY_URL и в текстах на странице. */
window.SITE_CONFIG = {
  BUY_URL:  'https://t.me/GrifRift555?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D1%87%D0%B5%D0%BA-%D0%BB%D0%B8%D1%81%D1%82%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8%20%D0%B1%2F%D1%83%20%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%D0%B0%20%D0%B7%D0%B0%202%20900%20%E2%82%B8',
  TELEGRAM: 'https://t.me/GrifRift555',
  PRICE:    '2 900 ₸'
};
(function () {
  var c = window.SITE_CONFIG;
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  function apply() {
    each('[data-buy]',  function (a) { a.href = c.BUY_URL; });
    each('[data-tg]',   function (a) { a.href = c.TELEGRAM; });
    each('[data-price]', function (el) { el.textContent = c.PRICE; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
