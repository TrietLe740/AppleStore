<template>
  <header>
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
          <router-link :to="{ name: 'Home' }">
            <li class="nav-item active mr-3">
              <a class="nav-link" href="/"
                >Trang chủ <span class="sr-only">(current)</span></a
              >
            </li>
          </router-link>
          <!-- iPhone -->
          <router-link :to="{ name: 'iPhone' }">
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">iPhone</a>
            </li>
          </router-link>
          <!-- Macbook -->
          <router-link :to="{ name: 'Mac' }">
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">Mac</a>
            </li>
          </router-link>
          <!-- iPad -->
          <router-link :to="{ name: 'iPad' }">
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">iPad</a>
            </li>
          </router-link>
          <!-- Phụ kiện -->
          <li class="nav-item mr-3">
            <a class="nav-link" href="#">Phụ kiện</a>
          </li>
          <!-- AppleCare -->
          <li class="nav-item mr-3">
            <a class="nav-link" href="#">AppleCare</a>
          </li>
          <!-- Thanh tìm kiếm -->
          <form class="form-inline my-2 my-lg-0 ml-5" action="#">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Tìm kiếm sản phẩm"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-secondary my-2 my-sm-0"
              type="submit"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <!-- Cart -->
          <router-link :to="{ name: 'Cart' }">
            <button
              class="btn btn-outline-secondary ml-lg-2 my-2 my-sm-0"
              type="submit"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </router-link>
        </ul>
      </div>

      <!-- <ul class="options-user">
        <li>
          <button
            href="#"
            v-on:click.prevent.stop="openDropdownUser()"
            class="btn bg-secondary btn-outline-secondary ml-lg-2 my-2 my-sm-0 text-light"
          >
            <i class="fa fa-user"></i>
          </button>
          <ul id="dropdownUser">
            <li>
              <a href=""><i class="fa fa-user"></i> User</a>
            </li>
            <li>
              <a href=""><i class="fa fa-sign-out"></i> Sign out</a>
            </li>
          </ul>
        </li>
      </ul> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppleHeader",
  methods: {
    openDropdownUser() {
      document.getElementById("dropdownUser").classList.toggle("show");
    },
  },
};
</script>

<style></style>
