<template>
    <div class='film-catalog-item'>
        <img src="" alt="img">
        <p class="film-catalog-name"></p>
        <p class="film-catalog-rait"></p>
        <p class="film-catalog-category"></p>
    </div>
  </template>
  
  <script>
   
    export default {
      name: "v-catalog-item",
      components: {
        vPopup
      },
      props: {
        product_data: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      data() {
        return {
          isInfoPopupVisible: false
        }
      },
      computed: {},
      methods: {
        filmClick() {
        this.$emit('filmClick', this.film_data.article)
      },
      mounted() {
        this.$set(this.product_data, 'quantity', 1)
      }
    }
    }
  </script>
  
  <style lang="scss" scoped>
    
  </style>