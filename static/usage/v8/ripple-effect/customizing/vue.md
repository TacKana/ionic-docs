```html
<template>
  <div class="wrapper">
    <b>点击任意形状查看涟漪效果</b>

    <div class="ion-activatable ripple-parent custom-parent">
      自定义父容器颜色
      <ion-ripple-effect></ion-ripple-effect>
    </div>

    <div class="ion-activatable ripple-parent">
      自定义涟漪颜色
      <ion-ripple-effect class="custom-ripple"></ion-ripple-effect>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IonRippleEffect } from '@ionic/vue';
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-between;
    text-align: center;

    height: 170px;
    width: 400px;

    margin: 0 auto;
  }

  b {
    width: 100%;
  }

  .ripple-parent {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    border: 1px solid #ddd;

    user-select: none;

    width: 100%;
    height: 50px;
    border-radius: 8px;
  }

  .custom-parent {
    color: #de1e7e;
  }

  .custom-ripple {
    color: #501ace;
  }
</style>
```