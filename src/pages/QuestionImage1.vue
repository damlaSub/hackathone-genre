<script>
  export default {
    data() {
      return {
        isAc: false,
        isActv: false,
        isAaa: false,
        isActive: false,
      };
    },
  };
</script>
<template>
  <main class="vh-100">
    <section class="container-xl">
      <h5 class="text-white pt-5 text-center my-5">
        Tu disposes d'1h avec ta moitié, quel type de moment t'attire :
      </h5>
      <div class="row">
        <div class="col-12 col-lg-3">
          <img
            :class="{ active: isActive }"
            @click="isActive = !isActive"
            src="../../images/img-1.png"
            class="img-fluid"
          />
        </div>
        <div class="col-12 col-lg-3">
          <img
            :class="{ active: isAaa }"
            @click="isAaa = !isAaa"
            src="../../images/img-2.png"
            class="img-fluid"
          />
        </div>
        <div class="col-12 col-lg-3">
          <img
            :class="{ active: isActv }"
            @click="isActv = !isActv"
            src="../../images/img-3.png"
            class="img-fluid"
          />
        </div>
        <div class="col-12 col-lg-3">
          <img
            :class="{ active: isAc }"
            @click="isAc = !isAc"
            src="../../images/img-4.png"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="./question-text2">
          <img class="arrow" src="../../images/arrow.png"
        /></a>
      </div>
      <div>
        <img
          class="logo rounded mx-auto d-block image-fluid pt-5 mt-5"
          src="../../images/logo-WHITE.png"
        />
      </div>
    </section>
  </main>
</template>
<style>
  body,
  .card {
    background-color: black;
  }

  .logo {
    width: 11vh;
  }
  .arrow {
    background-color: black;
    width: 7vh;
    padding-top: 100px;
  }
  .arrow:active {
    border-style: none;
  }
  h5 {
    font-family: "Libre Baskerville", serif;
    font-size: 25px;
    padding-bottom: 25px;
  }

  .col-12 {
    padding-bottom: var(--bs-gutter-x);
  }
  .col-lg-3 {
    padding-right: calc(var(--bs-gutter-x) * 0.2);
    padding-left: calc(var(--bs-gutter-x) * 0.2);
  }

  .active {
    color: #fff;
    font-size: 30px;
    background: #fff;
    border-radius: 0.1px;
    padding: 4px;
    transition: all 0.2s;
  }
</style>
