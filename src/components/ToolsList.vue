<template>
  <div class="tools-list">
    <h2>Выберите инструмент</h2>
    <div class="tool-cards">
      <div class="tool-card">
        <router-link :to="{ path: '/tools/jmeter' }">JMeter</router-link>
      </div>
      <div class="tool-card">
        <router-link :to="{ path: '/tools/victoriametrics' }">VictoriaMetrics</router-link>
      </div>
      <div class="tool-card">
        <router-link :to="{ path: '/tools/gitlab' }">Gitlab</router-link>
      </div>
      
      <div class="tool-card">
        <router-link :to="{ path: '/tools/kafka' }">Kafka</router-link>
      </div>
      <div class="tool-card">
        <router-link :to="{ path: '/tools/kubernetes' }"
          >Kubernetes</router-link
        >
      </div>
      <div class="tool-card">
        <router-link :to="{ path: '/tools/chrome' }"
          >Chrome DevTools</router-link
        >
      </div>
      <div class="tool-card">
        <router-link :to="{ path: '/tools/git' }">Git</router-link>
      </div>
      <div class="tool-card">
        <router-link :to="{ path: '/tools/java' }">Java</router-link>
      </div>
      <div class="tool-card">
        <router-link :to="{ path: '/tools/architecture' }"
          >Architecture</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ToolsList',
  };
</script>

<style scoped>
  .tools-list {
    font-family: 'Roboto Slab', serif;
    text-align: center;
    margin-top: 20px;
  }

  h2 {
    color: #007bff;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .tool-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tool-card {
    background-color: #f0f8ff;
    border: 1px solid #007bff18;
    border-radius: 10px;
    padding: 20px;
    margin: 10px 0;
    width: 80%;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition:
      background-color 0.3s,
      transform 0.3s;
  }

  .tool-card:hover {
    background-color: #e6f2ff;
    transform: translateY(-5px);
  }

  .tool-card a {
    text-decoration: none;
    color: #007bff;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .tool-card a:hover {
    color: #0056b3;
  }

  @media (max-width: 768px) {
    .tool-card {
      width: 90%;
    }
  }
</style>
