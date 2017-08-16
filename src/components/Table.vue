<template>
  <div class="container">
    <div class="row space">
      <div class="col-md-3">
        <b-dropdown id="ddown2" text="ITEM">
          <b-dropdown-item>Item 1</b-dropdown-item>
          <b-dropdown-item>Item 2</b-dropdown-item>
          <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="col-md-3">
        <b-dropdown text="COUNTRY">
          <b-dropdown-item>US</b-dropdown-item>
          <b-dropdown-item>UK</b-dropdown-item>
          <b-dropdown-item>FR</b-dropdown-item>
          <b-dropdown-item>JP</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="col-md-3">
        <b-dropdown text="RATING">
          <b-dropdown-item>All</b-dropdown-item>
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2</b-dropdown-item>
          <b-dropdown-item>3</b-dropdown-item>
          <b-dropdown-item>4</b-dropdown-item>
          <b-dropdown-item>5</b-dropdown-item>
          <b-dropdown-item>Positive</b-dropdown-item>
          <b-dropdown-item>Negative</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="col-md-3">
        <b-dropdown text="REVIEW TYPE">
          <b-dropdown-item>All</b-dropdown-item>
          <b-dropdown-item>Verified</b-dropdown-item>
          <b-dropdown-item>Not Verified</b-dropdown-item>
          <b-dropdown-item>Matched</b-dropdown-item>
          <b-dropdown-item>Not Matched</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="row space">
      <div class="table-responsive">
        <table class="table table-striped">
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
              <td class="text-center"></td>
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
              <td class="text-center"></td>
            </tr>
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
              <td class="text-center"></td>
            </tr>
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
              <td class="text-center"></td>
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
              <td class="text-center"></td>
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
  </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

td {
  height: 60px;
}

.space {
  margin: 30px 0;
}

</style>
