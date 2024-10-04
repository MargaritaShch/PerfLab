<template>
   <div class="header">
    <h2>PerfLAB</h2>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style>
.header {
  background-color: #ffffff; /* Белый фон для чистого вида */
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Легкая тень для глубины */
  margin-bottom: 20px;
  border-bottom: 2px solid #e0e0e0; /* Тонкая серая линия под заголовком */
}

/* Стиль заголовка */
.header h2 {
  color: #333333; /* Темный цвет для контраста */
  font-size: 2.5em;
  margin: 0;
  text-transform: uppercase; 
  letter-spacing: 2px; 
  font-weight: bold; /* Более жирный текст */
}

/* Общие стили для текста на странице */
body {
  font-family: "Roboto Slab", serif;
  background-color: #f7f9fc; /* Мягкий светло-серый фон */
  margin: 0;
  padding: 0;
}

/* Стили для блока с кодом и примерами */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #f0f0f0; /* Легкий серый фон */
  padding: 15px;
  border-radius: 8px; /* Скругленные углы */
  border: 1px solid #d0d0d0; /* Легкая серая рамка */
  overflow-x: auto;
}

code {
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  color: #d63384; /* Приятный оттенок розового для выделения кода */
}

/* Стили для текстов */
p {
  color: #333333; /* Четкий и контрастный текст */
  font-size: 1.1rem;
  line-height: 1.6; /* Пространство между строками для читабельности */
}

/* Адаптивные стили для мобильных устройств */
@media (max-width: 768px) {
  .header h2 {
    font-size: 2rem; /* Уменьшаем размер текста для мобильных */
  }

  body {
    padding: 10px;
  }
}

</style>
