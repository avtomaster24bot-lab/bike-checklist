/* ====== НАСТРОЙКИ САЙТА — меняйте только здесь ======
   PAY_URL  — платёжная ссылка (Kaspi / Stripe Payment Link / PayPal).
              ЗАГЛУШКА! Замените на вашу реальную ссылку.
              В кабинете платёжного сервиса укажите адрес возврата:
              https://avtomaster24bot-lab.github.io/bike-checklist/success.html
   PDF_URL  — файл чек-листа (можно ссылку на Google Drive / Dropbox).
   TABLE_URL — таблица Excel (торг + бюджет).
   TELEGRAM — ваш контакт.
   PRICE    — цена, подставляется во все кнопки и блок цены.
   Важно: те же ссылки продублированы в href в index.html / success.html
   (на случай, если JS отключён) — при замене поменяйте и там (поиск по тексту). */
window.SITE_CONFIG = {
  PAY_URL:   'https://kaspi.kz/pay/ЗАМЕНИТЬ',
  PDF_URL:   'files/checklist.pdf',
  TABLE_URL: 'files/checklist-tables.xlsx',
  TELEGRAM:  'https://t.me/GrifRift555',
  PRICE:     '2 900 ₸'
};
(function () {
  var c = window.SITE_CONFIG;
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  function apply() {
    each('[data-pay]',  function (a) { a.href = c.PAY_URL; });
    each('[data-pdf]',  function (a) { a.href = c.PDF_URL; });
    each('[data-xlsx]', function (a) { a.href = c.TABLE_URL; });
    each('[data-tg]',   function (a) { a.href = c.TELEGRAM; });
    each('[data-price]', function (el) { el.textContent = c.PRICE; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
