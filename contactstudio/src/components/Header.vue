<template>
  <!-- header -->
  <section id="header">
    <img class="logo" src="@/assets/img/logo.png" alt="Logo Concact Studio" />
  </section>
</template>

<script>
export default {};
</script>

<style>
#header {
  width: 100%;

  display: flex;
  justify-content: center;

  box-shadow: 0 5px 5px rgb(0, 0, 0, 0.1);

  padding: 20px 25px;
  margin-bottom: 50px;
}

#header .logo {
  max-height: 40px;
}
</style>
