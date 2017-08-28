<template>
  <div>
    <HeaderComponent />
    <ChartSection />
    <TableComponent />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import ChartSection from './ChartSection.vue'
import TableComponent from './TableComponent.vue'

export default {
  components: { HeaderComponent, ChartSection, TableComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
