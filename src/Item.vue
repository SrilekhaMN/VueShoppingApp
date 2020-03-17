<template>
  <div class="item-main_div">
    <div class="item-image">
      <img
      class="item--image"
      :src="items['image-URL']">
      <p v-if="items.offer">{{items.offer}}</p>
    </div>
    <div class="item-description">
      <p>{{items.name}}</p>
      <p>{{items.description}}</p>
      <p>{{'MRP ' + items.price}}</p>
      <p>{{items.quantity}}</p>
      <div class="button__flex--container">
        <button @click="onAddToCart()">{{'ADD TO CART'}}</button>
        <button
        :disabled="count===0"
        @click="onRemoveItem()">{{'-'}}
        </button>
        <p>{{count}}</p>
        <button @click="count+= 1">{{'+'}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Item',
    props: {
      items: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        count: 0
      }
    },
    methods: {
      onAddToCart () {
        this.$emit('add', this.getParams())
      },
      onRemoveItem () {
        this.count-= 1
        this.$emit('remove', this.getParams())
      },
      getParams () {
        return {
          'count': this.count,
          'item': this.items
        }
      }
    }
  }
</script>
<style>
.item-main_div {
  display: flex;
  justify-content: center;
}
.button__flex--container {
  display: flex;
  border-bottom: 2px solid black;
}
.button__flex--container > * {
  margin: 10px;
}
.item-main_div > div {
  text-align: left;
  margin: 10px;
}
.item-image {
  width: 100px;
}
.item-description {
  width: 400px;
}
.item--image {
  height: 100px;
  width:100px;
}
</style>
