<template>
  <div>
    <div class="items--list">
      <Item v-for="item in items"
        :items="item"
        :key="item.name"
        @add="onAddToCart($event)"
        @remove="onRemoveFromCart($event)">
      </Item>
    </div>
    <div class="cart__footer">
      <div>
        <p>{{'QTY' + totalQuantity}}</p>
        <p>{{'TOTAL' + totalPrice}}</p>
      </div>
      <button
        class="checkout__button"
        :disabled="!totalPrice"
        :title="getTitle()"
        @click="onCheckout()">{{'Checkout'}}</button>
    </div>
    <ConfirmationModal
      v-if="showConfirmationModal"
      @close="onModalClose()"
      :subject="getSubject()"
      :message="getMessage()"
      :button="getLabel()">
    </ConfirmationModal>
  </div>
</template>
<script>
  import Item from './Item'
  import ConfirmationModal from './ConfirmationModal'
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'shopping-cart',
    components: { Item, ConfirmationModal },
    data () {
      return {
        showConfirmationModal: false
      }
    },
    methods: {
      ...mapMutations('itemslist', [
        'setItems',
        'setTotalPrice',
        'setTotalQuantity'
      ]),
      ...mapActions('itemslist', [
        'fetchItems'
      ]),
      onAddToCart (params) {
        this.setTotalQuantity(this.totalQuantity + 1)
        let price = params.item.price
        let total = params.count * price
        this.setTotalPrice(this.totalPrice + total)
      },
      onRemoveFromCart (params) {
        if (params.count === 0) {
          this.setTotalQuantity(this.totalQuantity - 1)
        }
        let price = params.item.price
        this.setTotalPrice(this.totalPrice - price)
      },
      onCheckout () {
        this.showConfirmationModal = true
      },
      getMessage () {
        return 'Total Amount:' + this.totalPrice
      },
      getSubject () {
        return 'Your payment is successful. Items will be delivered soon.'
      },
      getLabel () {
        return 'OK'
      },
      onModalClose () {
        this.showConfirmationModal = false
        this.setTotalPrice(0)
        this.setTotalQuantity(0)
      },
      getTitle () {
        return !this.totalPrice ? 'No items to checkout' : ''
      }
    },
    mounted () {
      this.fetchItems()
    },
    computed: {
      ...mapGetters('itemslist', [
        'items',
        'totalPrice',
        'totalQuantity'
      ])
    }
  }
</script>
<style>
p {
  font-size: 20px;
}
.cart__footer {
  background-color: #ee82ee;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  padding-bottom: 20px;
  height: 70px;
}
.checkout__button {
  margin: 20px;;
}
button {
  background-color: #3cb371;
  border-radius: 5px;
}
.items--list {
  padding-bottom: 80px;
}
</style>
