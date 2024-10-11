<template>
  <div class="site-info">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <img v-if="logo" :src="logo" alt="logo" class="site-logo" />
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    url: String,
    description: String,
    logo: String, // 可选，如果没有 logo 可以不传
  },
};
</script>

<style scoped>
.site-info {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  background-color: #f9f9f9;
}

.site-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.site-info h3 {
  margin: 0;
  font-size: 16px;
}

.site-info p {
  font-size: 14px;
  color: #666;
}
</style>

