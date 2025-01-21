<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  padding: 100px 20px 0;
}

h1 {
  color: red;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: black; /* Set button background to black */
  color: white;            /* Set button text color to white */
  border: none;            /* Remove button border */
  border-radius: 5px;      /* Optional: Add rounded corners */
  transition: background-color 0.3s ease; /* Optional: Add smooth transition on hover */
}

button:hover {
  background-color: #333; /* Darker shade on hover */
}
</style>
