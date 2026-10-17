# Чек-лист покупки б/у велосипеда — лендинг (GitHub Pages)

Статический сайт без бэкенда: `index.html` (лендинг) → платёжная ссылка → `success.html` (скачивание PDF и Excel).

Сайт: https://avtomaster24bot-lab.github.io/bike-checklist/
Страница «Спасибо»: https://avtomaster24bot-lab.github.io/bike-checklist/success.html

## Файлы
- `index.html` — лендинг; `success.html` — страница после оплаты
- `config.js` — **все ссылки и цена** (меняйте здесь)
- `style.css`, `fonts/` — оформление
- `files/checklist.pdf` — чек-лист; `files/checklist-tables.xlsx` — таблица (торг + бюджет)
- `og.png` — картинка для превью ссылки в мессенджерах

## Как заменить ссылки
1. Откройте `config.js` (на GitHub: файл → значок карандаша).
2. Замените значения:
   - `PAY_URL` — ваша платёжная ссылка (сейчас заглушка `https://kaspi.kz/pay/ЗАМЕНИТЬ`);
   - `PDF_URL` — ссылка на PDF (или оставьте `files/checklist.pdf`);
   - `TABLE_URL` — ссылка на Excel;
   - `TELEGRAM` — ваш контакт;
   - `PRICE` — цена, например `'2 500 ₸'`.
3. Нажмите **Commit changes** — через 1–2 минуты сайт обновится.
4. Для надёжности (если у посетителя отключён JavaScript) те же ссылки стоят в `href` в `index.html` и `success.html` — найдите по тексту `kaspi.kz/pay/ЗАМЕНИТЬ` и замените так же.

Чтобы заменить сам PDF — загрузите новый файл с тем же именем в папку `files/` (Add file → Upload files).

## Адрес возврата после оплаты
В кабинете платёжного сервиса укажите URL возврата:

```
https://avtomaster24bot-lab.github.io/bike-checklist/success.html
```

- **Stripe Payment Link:** Payment Links → ваша ссылка → Edit → вкладка *After payment* → «Don't show confirmation page, redirect customers to your website» → вставьте адрес выше.
- **Kaspi:** при создании платёжной ссылки/счёта в Kaspi Pay (кабинет продавца) укажите ссылку возврата/«после оплаты», если поле доступно. Если такого поля нет — в описании товара или в чате отправьте покупателю ссылку на `success.html` вручную после оплаты.
- **PayPal:** в настройках кнопки/ссылки — «Return URL» = адрес выше.

Важно: `success.html` открывается и по прямой ссылке без оплаты — защита файла по ТЗ не требуется.

## Проверка
Сайт адаптирован под телефоны 360–430 px и десктоп. Без фреймворков и серверного кода.
