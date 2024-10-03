<template>
   <div class="header">
    <h2>PerfLAB</h2>
  </div>
  <div class="main-menu">
    <nav class="menu">
      <router-link to="/performance" class="menu-item" active-class="active-menu-item">Performance Engineer</router-link>
      <router-link to="/frontend" class="menu-item" active-class="active-menu-item">Frontend</router-link>
      <router-link to="/backend" class="menu-item" active-class="active-menu-item">Backend</router-link>
      <router-link to="/tools" class="menu-item" active-class="active-menu-item">Tools</router-link>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style>
.header {
  background-color: #f0f8ff; 
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 255, 0.1); 
  margin-bottom: 20px;
}

.header h2 {
  color: #007bff;
  font-size: 2.5em;
  margin: 0;
  text-transform: uppercase; 
  letter-spacing: 2px; 
}


.header p {
  color: #333;
  font-size: 1.2em;
  margin: 5px 0 0;
  font-style: italic; 
}

body {
  font-family: "Roboto Slab", serif;
  background-color: #e6f2ff; 
  margin: 0;
  padding: 0;
}

pre {
  white-space: pre-wrap; 
  word-wrap: break-word; 
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto; 
}

code {
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
}

.menu {
  margin-top: 10px;
}

.menu-item {
  margin: 0 15px;
  font-size: 1.5rem;
  color: #007bff;
  text-decoration: none;
}

.menu-item:hover {
  color: #0056b3;
}
.menu-item:hover {
  color: #0056b3;
  background-color: #e0f7ff; /* Немного меняем фон при наведении */
}

.active-menu-item {
  border: 2px solid #007bff74; 
  background-color: #e0f7ff; 
  color: #0056b3;
  border-radius: 5px;
  padding: 10px;
}


.main-menu{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media (max-width: 480px) {
  .menu-item {
  font-size: 1rem;
 
}
}
</style>
