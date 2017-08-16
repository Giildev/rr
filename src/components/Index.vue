<template>
  <div>
    <HeaderComponent />
    <ChartSection />
    <Table />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import ChartSection from './ChartSection.vue'
import Table from './Table.vue'

export default {
  components: { HeaderComponent, ChartSection, Table }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
