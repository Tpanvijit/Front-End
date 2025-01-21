<template>
  <div class="card">
    <div class="card-inner">
      <img :src="image" alt="title" style="width: 100%;" />
      <div class="container">
        <h1>{{ name }}</h1>
        <p class="price">${{ price }}</p>
        <router-link :to="`/products/${id}`">
          <button>Add to Cart</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  max-width: 350px;
  margin: 40px auto;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 10px 20px rgba(255, 254, 254, 0.1);
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.9));
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7));
}

.card-inner {
  position: relative;
  z-index: 1;
}

.card-img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: imageMove 1s ease-out;
}

.card-img:hover {
  transform: scale(1.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.container {
  padding: 25px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 15px 15px;
  backdrop-filter: blur(10px);
}

h1 {
  font-size: 1.6em;
  color: #2c3e50;
  margin: 15px 0;
  font-weight: 600;
}

.price {
  font-size: 1.3em;
  color: #e74c3c;
  font-weight: 500;
  margin-bottom: 20px;
}

.card button {
  padding: 15px;
  font-size: 17px;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.card button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

@keyframes imageMove {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
