<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
        <a class="navbar-brand font-weight-bold ml-2" href="/">TL AppleStore</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <router-link style="text-decoration: none" :to="{ name: 'Home' }">
              <li class="nav-item active mr-1">
                <a class="nav-link" href="/"
                  >Trang chủ <span class="sr-only">(current)</span></a
                >
              </li>
            </router-link>
            <!-- iPhone -->
            <router-link style="text-decoration: none" :to="{ name: 'iPhone' }">
              <li class="nav-item mr-1">
                <a class="nav-link" href="/iphone">iPhone</a>
              </li>
            </router-link>
            <!-- Macbook -->
            <router-link style="text-decoration: none" :to="{ name: 'Mac' }">
              <li class="nav-item mr-1">
                <a class="nav-link" href="#">Mac</a>
              </li>
            </router-link>
            <!-- iPad -->
            <router-link style="text-decoration: none" :to="{ name: 'iPad' }">
              <li class="nav-item mr-1">
                <a class="nav-link" href="#">iPad</a>
              </li>
            </router-link>
            <!-- AppleWatch -->
            <router-link
              style="text-decoration: none"
              :to="{ name: 'AppleWatch' }"
            >
              <li class="nav-item mr-1">
                <a class="nav-link" href="#">AppleWatch</a>
              </li>
            </router-link>
            <!-- AirPods -->
            <router-link
              style="text-decoration: none"
              :to="{ name: 'AirPods' }"
            >
              <li class="nav-item mr-1">
                <a class="nav-link" href="#">AirPods</a>
              </li>
            </router-link>
            <!-- AppleCare -->
            <router-link
              style="text-decoration: none"
              :to="{ name: 'AppleCare' }"
            >
              <li class="nav-item mr-1">
                <a class="nav-link" href="#">AppleCare</a>
              </li>
            </router-link>
            <Search />
            <!-- Cart -->
            <router-link style="text-decoration: none" :to="{ name: 'Cart' }">
              <button
                class="btn btn-outline-secondary my-2 my-lg-0"
                type="submit"
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </router-link>
            <!-- Cart -->
            <router-link style="text-decoration: none" :to="{ name: 'User' }">
              <button
                class="btn btn-outline-secondary ml-lg-2 my-2 my-sm-0"
                type="submit"
              >
                <i class="fa-solid fa-user"></i>
              </button>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  name: "AppleHeader",

  components: {
    Search,
  },

  methods: {
    openDropdownUser() {
      document.getElementById("dropdownUser").classList.toggle("show");
    },
  },
};
</script>

<style scoped>
.navbar-nav {
  text-align: center;
}

#search {
  max-width: 200px;
}
</style>
