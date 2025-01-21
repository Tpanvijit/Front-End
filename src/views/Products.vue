<script setup>
import MyCard from '@/views/MyCard.vue';
</script>

<template>
  <main>
    <div class="tx">
      <h1>Products</h1>
    </div>
    <div class="grid-container">
      <!-- Render items dynamically -->
      <MyCard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :price="item.price"
        :image="item.image"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: 'Products',
  components: {
    MyCard,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.items = json;
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  },
};
</script>

<style scoped>
main {
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
}

.tx h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 10px;
}

.grid-container .card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-container .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
