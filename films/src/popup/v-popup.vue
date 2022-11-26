<template>
    <div class="popup_wrapper" ref="popup_wrapper">
      <div class='v-popup'>
        <div class="v-popup__header">
          <span></span>
          <span>
          <i
              class="material-icons"
              @click="closePopup"
          >
            close
          </i>
        </span>
        </div>
        <div class="v-popup__content">
          <slot></slot>
        </div>
        <div class="v-popup__footer">
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "v-popup",
      props: {
        
      },
      data() {
        return {}
      },
      methods: {
        closePopup() {
          this.$emit('closePopup')
        }
      },
      mounted() {
        let vm = this;
        document.addEventListener('click', function (item) {
          if (item.target === vm.$refs['popup_wrapper']) {
            vm.closePopup()
          }
        })
      },
    }
  </script>
  
  <style lang="scss">
    body{
    margin: 0;
    padding: 0;
    font-family: 1;
    }
    .popup_wrapper {
      background: rgba(64,64,64, .4);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
    }
    .v-popup {
      padding: 16px;
      width: 100%;
        height: 100%;
        left: 0;
        top: 0;
  
      background: #00000049;
      box-shadow: 0 0 17px 0 rgba(70, 115, 219, 1);
      z-index: 10;
      &__header, &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__content {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .material-icons{
        color: white;
        padding-top: 50px;
        padding-left: 200px;
        padding-right: 100px ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;   
        font-size: 37px;
      }
    }
  </style>