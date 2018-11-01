<template>  
    <v-layout row wrap>
        <v-flex xs12>

            <v-layout row>
                <v-flex xs12>
                    <h2>KPIs (Last Month)</h2>
                </v-flex>
            </v-layout>

            <hr>

            <v-layout row justify-space-around>
                <v-flex xs6>
                    <select-component></select-component>
                </v-flex>
            </v-layout>

            <v-layout row justify-space-around>
                <v-flex xs3>
                    <div class="card">
                        <div class="img-container">
                            <img src="http://www.touchstoneone.com/wp-content/uploads/2017/04/New-Customer-Touchstone-6759-Icon-Post-Set-02@4x-1.jpg" alt="">
                        </div>
                        <h1>{{ Math.round( newCustomers / requests * 100 ) }}%</h1>
                        <h4>Customer winning rate</h4>
                        <p>New Customers: {{newCustomers}}</p>
                        <p>Requests: {{requests}}</p>
                    </div>
                </v-flex>
                <v-flex xs3>
                    <div class="card">
                        <div class="img-container">
                            <img src="https://png.icons8.com/metro/1600/checkmark.png" alt="">
                        </div>
                        <h1>{{ Math.round( fulfilledOrders / orders * 100 ) }}%</h1>
                        <h4>Orders Fulfillment</h4>
                        <p>Fulfilled Orders: {{fulfilledOrders}}</p>
                        <p>Orders: {{orders}}</p>
                    </div>
                </v-flex>
                <v-flex xs3>
                    <div class="card">
                        <div class="img-container">
                            <img src="https://www.qminder.com/resources/img/blog/customer-satisfaction-score.png" alt="">
                        </div>
                        <h1>{{Math.round(ratings / ratingsCount / 25 * 100)}}%</h1>
                        <h4>Customer Satisfaction</h4>
                        <p>Received Ratings: {{ratingsCount}}</p>
                    </div>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import Select from "./components/Select.vue";

import { Orders, Ratings, Customers, Requests } from "../lib/collections.js";

export default {
  components: {
    Select
  },
  methods: {
    sumRate(rating) {
      return (
        +rating["household-supply"] +
        +rating["communication"] +
        +rating["visual-appearance"] +
        +rating["basic-care"] +
        +rating["overall"]
      );
    }
  },
  meteor: {
    orders() {
      return Orders.find({}).fetch().length;
    },
    fulfilledOrders() {
      return Orders.find({ fulfilled: true }).fetch().length;
    },
    ratingsCount() {
      return Ratings.find({}).fetch().length;
    },
    ratings() {
      let ratings = Ratings.find({}).fetch();

      return ratings.reduce((acc, rating) => {
        acc += this.sumRate(rating);
        return acc;
      }, 0);
    },
    newCustomers() {
      return Customers.find({ new: true }).fetch().length;
    },
    requests() {
      return Requests.find({}).fetch().length;
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 1rem;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-container img {
  height: 8rem;
  max-width: 100%;
}

h1,
h4 {
  margin: 0.5rem 0;
}
p {
  margin: 0;
}
</style>