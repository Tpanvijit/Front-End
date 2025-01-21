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
  background: linear-gradient(45deg, #ff5722, #ffc107); /* เปลี่ยนสีแบ็คกราวด์ */
  padding: 15px 0;
  z-index: 1000;
  border-radius: 0;  
  box-shadow: none;  
  display: flex;
  justify-content: space-between; /* Logo left and links centered */
  align-items: center;
  animation: none; /* ปิด animation เพื่อไม่ให้ขยับตอนรีเฟรช */
}

.wrapper {
  display: flex;
  justify-content: flex-start; /* Adjusted to move everything slightly left */
  align-items: center;     
  width: 100%;              
  padding: 0 20px;        
}

.logo img {
  height: 60px;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

.logo img:hover {
  transform: scale(1.1); 
}

.nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
  justify-content: center; /* Centers the nav links */
  flex-grow: 1; /* Make the nav container take available space */
}

.nav-links li {
  list-style: none;
}

.nav-links li a {
  text-decoration: none;
  color: #000; /* เปลี่ยนสีตัวอักษรในลิงก์ */
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  padding: 12px 30px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.15); /* เปลี่ยนสีพื้นหลังลิงก์ */
  transition: all 0.4s ease;
  position: relative;
  display: inline-block;
}

.nav-links li a:hover,
.nav-links li a:focus {
  background-color: rgba(0, 0, 0, 0.3); /* เปลี่ยนสีลิงก์เมื่อ hover */
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8); /* เปลี่ยนสีเงาของข้อความ */
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.nav-links li a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #000; /* เปลี่ยนสีเส้นขีด */
  transition: width 0.3s ease;
}

.nav-links li a:hover::before {
  width: 100%;
}

.nav-links li a.active {
  color: #ff4081;
  font-weight: 700;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
  }

  nav {
    justify-content: space-between;
  }

  .logo img {
    height: 50px;
  }

  .nav-links li {
    margin: 10px 0;
  }

  .nav-links li a {
    padding: 10px 20px;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    display: none;
  }

  .hamburger div {
    width: 30px;
    height: 4px;
    background-color: #000;
    border-radius: 10px;
  }

  .hamburger.active div {
    background-color: #ff4081;
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
}
</style>
