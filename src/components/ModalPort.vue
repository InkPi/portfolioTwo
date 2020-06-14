<template>
  <div id="modal-template">
    <template>
      <div class="modal" v-show="value" id="modalid">
        <div class="container">
          <div class="modal__title" style="color:white">{{ link.title }}</div>
          <p>{{ link.parag }}</p>
          <img :src="link.linkHref" />
          <i
            class="fas fa-times"
            @click.prevent="close"
            style="color:white"
          ></i>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "modalTemplate",
  props: {
    value: {
      required: true
    },
    link: {
      required: true
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 9998;
  overflow: scroll;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
</style>
