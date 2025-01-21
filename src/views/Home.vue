<template>
  <div class="app">
    <h1>Vue.js To-Do List</h1>
    <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ 'completed-task': task.completed }">{{ task.text }}</span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  background-color: #ffecd2;
}

h1 {
  color: #ff5722;
}

input,
button {
  margin: 10px 0;
}

input {
  border: 2px solid #ff5722;
  padding: 8px;
  border-radius: 4px;
}

button {
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e64a19;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.completed-task {
  text-decoration: line-through;
  color: #9e9e9e;
}

@media (max-width: 576px) {
  .app {
    padding: 10px;
  }

  h1 {
    font-size: 24px;
  }

  input {
    width: 100%;
    font-size: 16px;
  }

  button {
    font-size: 16px;
    padding: 8px 12px;
  }

  li {
    flex-direction: column;
    align-items: flex-start;
  }

  li button {
    margin-top: 5px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  h1 {
    font-size: 28px;
  }

  input {
    width: 80%;
    font-size: 18px;
  }

  button {
    font-size: 18px;
    padding: 10px 15px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  h1 {
    font-size: 32px;
  }

  input {
    width: 70%;
    font-size: 20px;
  }

  button {
    font-size: 20px;
    padding: 12px 18px;
  }

  li {
    justify-content: space-between;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 36px;
  }

  input {
    width: 50%;
    font-size: 22px;
  }

  button {
    font-size: 22px;
    padding: 15px 20px;
  }
}
</style>
