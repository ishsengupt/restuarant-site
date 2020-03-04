
<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item['.key']">
          <tr>
            <td><strong>{{ item.name }}</strong></td>
          </tr>
          <tr v-for="(option,index) in item.options" :key="option[index]">
            <td>{{ option.size }}</td>
            <td>{{ option.price | currency }}</td>
            <td><button class="btn btn-sm btn-outline-success" 
                        type="button"
                        @click="addToBasket( item, option )">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- shopping basket -->
    <div class="col-sm-12 col-md-6">
      <div v-if="basket.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in basket" :key="index">
            <tr>
              <td><button class="btn btn-sm" 
                          type="button"
                          @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }}-</span>
                <button class="btn btn-sm" 
                        type="button"
                        @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{ item.name}} {{ item.size }}"</td>
              <td>{{ item.price * item.quantity | currency }}</td>
            </tr>
          </tbody>
        </table>
        <p>Order total: {{ total | currency }}</p>
        <button class="btn btn-success btn-block" @click="addNewOrder()">Place Order</button>
      </div>
      <div v-else>
        <p>{{ basketText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {store} from '../store/store'
//import { dbOrdersRef } from '../firebase'

  export default {
    data() {
      return {
        basket: [],
        basketText: 'Your basket is empty!'
      }
    },
    computed: {
   
      ...mapGetters (['getMenuItems']),
      total() {
        var totalCost = 0;
        for( var items in this.basket ) {
          var individualItem = this.basket[items];
          totalCost += individualItem.quantity * individualItem.price;
        }
        return totalCost
      }
    },
    methods: {
      async addToBasket(item, option) {
        const pizzaExists = await this.basket.find(
          pizza => pizza.name === item.name && pizza.size === option.size
        );
        if (pizzaExists) {
          pizzaExists.quantity++;
          return;
        }
        this.basket.push({
          name: item.name,
          price: option.price,
          size: option.size,
          quantity: 1
        }) 
      },
      removeFromBasket(item) {
        this.basket.splice(this.basket.indexOf(item), 1);
      },
      increaseQuantity(item) {
        item.quantity++;
      },  
      decreaseQuantity(item) {
        item.quantity--;

        if(item.quantity === 0) {
          this.removeFromBasket(item);
        }
      },
      addNewOrder() {
        const order = {
          pizzas: { ...this.basket },
          createdAt: new Date(),
        }
        //this.$store.commit('addOrder', this.basket)
        store.dispatch('addNewOrder', order)
        this.basket = [];
        this.basketText = "Thank you, your order has been placed! :)"
      }
    }
  }
</script>