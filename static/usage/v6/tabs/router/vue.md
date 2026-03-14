```html
<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
<template>
  <ion-tabs>
    <ion-tab tab="home">
      <ion-header>
        <ion-toolbar>
          <ion-title>立即聆听</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">立即聆听内容</div>
      </ion-content>
    </ion-tab>
    <ion-tab tab="radio">
      <ion-header>
        <ion-toolbar>
          <ion-title>电台</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">电台内容</div>
      </ion-content>
    </ion-tab>
    <ion-tab tab="library">
      <ion-header>
        <ion-toolbar>
          <ion-title>资料库</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">资料库内容</div>
      </ion-content>
    </ion-tab>
    <ion-tab tab="search">
      <ion-header>
        <ion-toolbar>
          <ion-title>搜索</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">搜索内容</div>
      </ion-content>
    </ion-tab>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-icon name="play-circle"></ion-icon>
        立即聆听
      </ion-tab-button>
      <ion-tab-button tab="radio">
        <ion-icon name="radio"></ion-icon>
        电台
      </ion-tab-button>
      <ion-tab-button tab="library">
        <ion-icon name="library"></ion-icon>
        资料库
      </ion-tab-button>
      <ion-tab-button tab="search">
        <ion-icon name="search"></ion-icon>
        搜索
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script lang="ts">
  import { IonTabs, IonTabBar, IonTabButton, IonContent, IonHeader, IonTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTabs, IonTabBar, IonTabButton, IonContent, IonHeader, IonTitle },
  });
</script>
```