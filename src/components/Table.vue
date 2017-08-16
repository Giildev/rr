<template>
  <div class="container">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th class="text-center">Country</th>
            <th class="text-center">Review Date</th>
            <th class="text-center">Order #</th>
            <th class="text-center">Customer</th>
            <th class="text-center">Profile Link</th>
            <th class="text-center">Rating</th>
            <th class="text-center">Verified</th>
            <th class="text-center">Item(s)</th>
            <th class="text-center">Review Changed</th>
            <th class="text-center">Scan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">US</td>
            <td class="text-center">31 May 2016</td>
            <td class="text-center">206-4305678-3199517</td>
            <td class="text-center">Joe Bloe</td>
            <td class="text-center"></td>
            <td class="text-center">4.5</td>
            <td class="text-center">Yes</td>
            <td class="text-center"></td>
            <td class="text-center">Yes</td>
            <td class="text-center"><button type="button" class="btn btn-success">Start</button></td>
          </tr>
          <tr>
            <td class="text-center">UK</td>
            <td class="text-center">5 June 2017</td>
            <td class="text-center">204-3845376-1513150</td>
            <td class="text-center">Mary Jane</td>
            <td class="text-center"></td>
            <td class="text-center">4.7</td>
            <td class="text-center">No</td>
            <td class="text-center"></td>
            <td class="text-center">No</td>
            <td class="text-center"><button type="button" class="btn btn-danger">Stop</button></td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
