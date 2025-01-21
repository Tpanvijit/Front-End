<template>
  <nav>
    <div class="wrapper">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="App Logo" />
        </router-link>
      </div>

      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">My Cart</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyNavbar",
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #0e1df5, #a5f1f7); 
  padding: 10px 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
}

.logo img {
  height: 50px;
  border-radius: 8px; 
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.logo img:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-links li a {
  text-decoration: none;
  color: #fff; 
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif; 
  padding: 10px 20px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2); 
  transition: all 0.4s ease;
  position: relative;
}

.nav-links li a:hover,
.nav-links li a:focus {
  background-color: rgba(255, 255, 255, 0.4); 
  color: #e4a9ff; 
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
}

.nav-links li a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #fff; 
  transition: width 0.3s ease;
}

.nav-links li a:hover::before {
  width: 100%;
}

.nav-links li a.active {
  background-color: rgba(23, 0, 231, 0.5); 
  color: #5053e9;
  font-weight: 700;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger div {
  width: 30px;
  height: 3px;
  background-color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.hamburger.active div {
  background-color: #3d12fa;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 999;
    gap: 15px;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: flex;
  }

  .nav-links li a {
    padding: 12px 20px;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .nav-links li a:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}

</style>
