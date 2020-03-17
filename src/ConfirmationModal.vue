<template>
  <div class="modal__main--div">
    <div class="modal--container">
      <div class="modal__sub--div">
        <p>{{subject}}</p>
        <p>{{message}}</p>
        <button
          class="modal--button"
          @click="$emit('close')">{{button}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmationModal',
  props: {
    subject: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.modal__main--div {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.modal__sub--div {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  text-align: center;
}
.modal--container {
  text-align: left;
  margin: auto;
}
.modal--button {
  margin-left: 80%;

}
</style>
