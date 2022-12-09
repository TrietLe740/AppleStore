<template>
  <div class="container">
    <div class="nav">
      <a href="#" class="nav-logo">
        <img src="../../assets/logo.svg" alt="" />
      </a>
      <div class="nav-mobile">
        <i class="fa fa-bars" v-on:click="openMenuMobile()"></i>
      </div>
    </div>
    <div class="sidebar-list" id="sidebar">
      <div class="sidebar-list-item">
        <router-link
          style="text-decoration: none"
          :to="{ name: 'AdminDashboard' }"
        >
          <i class="fa fa-home"></i>
        </router-link>
      </div>
      <div class="sidebar-list-item">
        <router-link style="text-decoration: none" to="...">
          <i class="fa fa-user"></i>
        </router-link>
      </div>
      <div class="sidebar-list-item">
        <a href="">
          <i class="fa fa-star"></i>
        </a>
      </div>
      <div class="sidebar-list-item">
        <router-link :to="{ name: 'ProductManager' }">
          <i class="fa fa-shopping-bag"></i>
        </router-link>
      </div>
      <div class="sidebar-list-item">
        <a href="">
          <i class="fa fa-clock-o"></i>
          <span class="tooltip">Time</span>
        </a>
      </div>
      <div class="sidebar-list-item">
        <a href="">
          <i class="fa fa-cogs"></i>
          <span class="tooltip">Config</span>
        </a>
      </div>
      <div class="sidebar-list-item">
        <a href="">
          <i class="fa fa-sign-out"></i>
          <span class="tooltip">Sign out</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeader",

  data() {
    return {};
  },

  methods: {
    openDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    openDropdownUser() {
      document.getElementById("myDropdownUser").classList.toggle("show");
    },
    openMenuMobile() {
      document.getElementById("menu").classList.toggle("showMenu");
      document.getElementById("sidebar").classList.toggle("showSidebar");
    },
  },
};
</script>

<style>
.nav {
  width: 80px;
  height: 100%;
  display: inline-block;
  background-color: #5dae8b;
  z-index: 5;
  position: fixed;
}

.nav-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.nav-logo img {
  width: 50px;
  padding: 10px;
  vertical-align: middle;
}

.nav-mobile {
  display: none;
}

.options-user {
  list-style: none;
}

.options-user a.options-user-head {
  font-size: 20px;
  border: 1px solid #e2e8f5;
  padding: 10px;
  border-radius: 4px;
  color: #99cda9;
}

.options-user li ul {
  display: none;
  background-color: #ffffff;
  width: 100%;
  z-index: 900;
  border-radius: 0;
  box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1);
  border: 1px solid #deebfd;
  position: absolute;
  top: 70px;
  right: 10px;
  width: 150px;
  border-width: 1px;
  border-radius: 6px;
  list-style: none;
}

.options-user li ul:before {
  content: "";
  position: absolute;
  top: -8.5px;
  right: 24px;
  border-bottom: 9px solid #fff;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
}

.options-user li ul li a {
  position: relative;
  padding: 8px 15px;
  height: 38px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #000;
  border-bottom: 1px solid #eee;
}

.options-user li ul li a:hover {
  background-color: #eee;
}

.options-user li ul li a i {
  margin-right: 10px;
}

.options-user li a:hover .options-user li ul {
  visibility: visible;
}

.sidebar-list {
  position: fixed;
  top: 12%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: 80px;
}

.sidebar-list-item {
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 15px 0;
  position: relative;
}

.sidebar-list-item i {
  color: #fff;
  font-size: 25px;
  display: block;
  line-height: 1;
}

.show {
  display: block !important;
}
</style>
