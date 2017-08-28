<template>
  <div class="chart">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-12 chart__position">
          <CommitChart height="200"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommitChart from '../assets/js/CommitChart'

export default {
  components: { CommitChart },
  name: 'ChartSection'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.chart {
  display: block;

  &__position {
    margin: 50px 0;
  }
}

</style>
