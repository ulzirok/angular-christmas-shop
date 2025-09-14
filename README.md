# 🎄 Angular Christmas Shop 
- интернет-магазин, выполненный в рамках практики по **Angular**.

Новогодние праздники уже не за горами! Пора покупать подарки... но где?
Пора создать уютное место для покупки интересных подарков!

## Ссылка: [https://ulzirok.github.io/angular-online-shop/](https://ulzirok.github.io/angular-christmas-shop/)

## Используемые технологии
- **Angular 20** (Standalone Components, Router, HttpClient)  
- **TypeScript**  
- **SCSS (модульные стили)**  
- **json-server** (имитация бэкенда)  
- **GitHub Pages** (деплой)
  
---

## Реализовано

### Главная страница (Home)
- Бургер-меню (открытие/закрытие при ширине ≤768px)  
- Слайдер  
- Таймер до Рождества  
- Блок **Random Gifts** (случайные подарки)  

### Страница Gifts
- Список товаров с карточками  
- Переключение категорий (фильтрация)  
- Поиск по ключевым словам  
- Кнопка **UP** для прокрутки вверх страницы  

### Общее
- Адаптивная верстка  
- Работа с mock-сервером (`db.json` через **json-server**)  
- Структурированное разделение компонентов  
  - `Hero`, `About`, `Slider`, `GiftsPreview`, `Timer` и др.
---

## Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/ulzirok/angular-christmas-shop.git

# Перейти в папку проекта
cd angular-christmas-shop

# Установить зависимости
npm install

# Запустить приложение
ng serve

Приложение будет доступно по адресу: http://localhost:4200






