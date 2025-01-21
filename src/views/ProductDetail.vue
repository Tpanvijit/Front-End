<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const items = ref([]);
const product = computed(() => items.value.find((item) => item.id === parseInt(id)));

onMounted(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      items.value = [data]; 
    })
    .catch((error) => {
      console.error("Error fetching product", error);
    });
});

const getImageUrl = (path) => {
  return path;
};
</script>

<template>
  <div v-if="product" class="container">
    <div class="left-column">
      <img :src="product.image" :alt="product.title" />
    </div>

    <div class="right-column">
      <div class="product-description">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p class="product-price">Price: ${{ product.price }}</p>
        <router-link to="/products">
          <button class="cart-btn">Back to Products</button>
        </router-link>
      </div>
    </div>
  </div>

  <div v-else>
    <h1>Product not found</h1>
    <router-link to="/products">Go back to the product list</router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
}

.left-column, .right-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-description {
  text-align: center;
  max-width: 500px;
  color: rgb(253, 253, 253);
}

.product-description h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.product-description p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-price {
  font-size: 1.5rem;
  color: rgb(248, 3, 3);
  margin-bottom: 20px;
}

.cart-btn {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #8bf890;
  color: white;
  border: none;
  border-radius: 5px;
}

.cart-btn:hover {
  background-color: #0056b3;
}
</style>
