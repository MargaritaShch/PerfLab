<template>
  <div class="header">
    <h2>PerfLAB</h2>
  </div>
  <router-view></router-view>
</template>

<script>
  export default {};
</script>

<style>
  .header {
    background-color: #ffffff;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    border-bottom: 2px solid #e0e0e0;
  }

  .header h2 {
    color: #333333;
    font-size: 2.5em;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }

  body {
    font-family: 'Roboto Slab', serif;
    background-color: #f7f9fc;
    margin: 0;
    padding: 0;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #d0d0d0;
    overflow-x: auto;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
    color: #d63384;
  }

  p {
    color: #333333;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .header h2 {
      font-size: 2rem;
    }

    body {
      padding: 10px;
    }
  }
</style>
