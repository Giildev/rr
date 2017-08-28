<template>
  <div class="container">
    <div class="row space">
      <div class="col-md-3">
        <v-select :value.sync="selected" :options="item" placeholder="ITEM"></v-select>
      </div>
      <div class="col-md-3">
        <v-select :value.sync="selected" :options="country" placeholder="COUNTRY"></v-select>
      </div>
      <div class="col-md-3">
        <v-select :value.sync="selected" :options="rating" placeholder="RATING"></v-select>
      </div>
      <div class="col-md-3">
        <v-select :value.sync="selected" :options="review" placeholder="REVIEW"></v-select>
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
              <td class="text-center"><a href="#">Joe Bloe</a></td>
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
              <td class="text-center"><a href="#">Mary Jane</a></td>
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
              <td class="text-center"><a href="#">Joe Bloe</a></td>
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
              <td class="text-center"><a href="#">Mary Jane</a></td>
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
              <td class="text-center"><a href="#">Joe Bloe</a></td>
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
              <td class="text-center"><a href="#">Mary Jane</a></td>
              <td class="text-center">4.7</td>
              <td class="text-center">No</td>
              <td class="text-center"></td>
              <td class="text-center">No</td>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </table>
    </div>
    <div class="col-md-12">
      <div class="row justify-content-md-center">
        <button type="button" class="btn btn-outline-primary">Show More</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  components: { vSelect },

  data () {
    return {
      selected: null,
      item: ['item1', 'item2', 'item3'],
      country: ['US', 'UK', 'FR', 'JP'],
      rating: ['All', '1', '2', '3', '4', '5', 'Positive', 'Negative'],
      review: ['All', 'Verified', 'Not Verified', 'Matched', 'Not Matched']
    }
  }
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
