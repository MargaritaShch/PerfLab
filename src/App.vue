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
  font-family: 'Arial', sans-serif;
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
</style>
