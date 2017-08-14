<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <h3 class="col-xs-12 header__text">Customer Reviews</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: { },
  name: 'HeaderComponent'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.header {
  width: 100%;
  height: 75px;
  background-color: #181818;

  &__text{
    color: #ffca42;
    transform: translateY(60%);
  }
}

</style>
