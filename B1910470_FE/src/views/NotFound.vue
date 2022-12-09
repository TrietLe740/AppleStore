<template>
  <div class="container notfound row">
    <div class="mx-auto">
      <img class="notfound-img col-12" src="../assets/img/404.gif" alt="" />
    </div>
    <h2 class="notfound-content font-weight-bold text-center col-12">
      Oops! Không tìm thấy trang mà bạn cần!
    </h2>
    <div class="mx-auto">
      <router-link style="text-decoration: none" to="/">
        <button class="go-back-btn btn text-light font-weight-bold">
          Về Trang chủ
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.notfound {
  background: #fff;
}

.notfound-img {
  max-width: 100%;
}

.go-back-btn {
  background-color: rgb(56, 150, 255);
}

.go-back-btn:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
</style>
