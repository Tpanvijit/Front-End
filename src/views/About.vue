<template>
  <div class="list-container">
    <div class="button-group">
      <button @click="show = !show">Toggle List</button>
      <button @click="list.push(list.length + 1)">Push Number</button>
      <button @click="list.pop()">Pop Number</button>
      <button @click="list.reverse()">Reverse List</button>
    </div>
  
    <ul v-if="show && list.length">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">List is not empty, but hidden.</p>
    <p v-else>List is empty.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
const list = ref([1, 2, 3]);
</script>

<style scoped>
main {
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start; 
  height: 100vh;
  margin: 0;
  padding-left: 20px; 
  padding-top: 110px; 
}

.list-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px;
}

.button-group {
  display: flex; 
  gap: 10px; 
  margin-bottom: 10px; 
}

button {
  padding: 10px 12px;  
  font-size: 12px;    
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(53, 92, 223);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

button:hover {
  background-color: #f4f4f4;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
}

ul {
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
  color: white;
}

li {
  margin: 5px 0;
}
</style>
