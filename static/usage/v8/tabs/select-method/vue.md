```html
<template>
  <ion-tabs ref="tabs">
    <ion-tab tab="home">
      <ion-page id="home-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>即刻聆听</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">
            即刻聆听内容
            <ion-button @click="selectRadio()">前往电台</ion-button>
          </div>
        </ion-content>
      </ion-page>
    </ion-tab>
    <ion-tab tab="radio">
      <ion-page id="radio-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>电台</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">电台内容</div>
        </ion-content>
      </ion-page>
    </ion-tab>
    <ion-tab tab="library">
      <ion-page id="library-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>音乐库</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">音乐库内容</div>
        </ion-content>
      </ion-page>
    </ion-tab>
    <ion-tab tab="search">
      <ion-page id="search-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>搜索</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">搜索内容</div>
        </ion-content>
      </ion-page>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-icon :icon="playCircle" />
        即刻聆听
      </ion-tab-button>
      <ion-tab-button tab="radio">
        <ion-icon :icon="radio" />
        电台
      </ion-tab-button>
      <ion-tab-button tab="library">
        <ion-icon :icon="library" />
        音乐库
      </ion-tab-button>
      <ion-tab-button tab="search">
        <ion-icon :icon="search" />
        搜索
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTab,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
  import { playCircle, radio, library, search } from 'ionicons/icons';

  const tabs = ref();

  const selectRadio = () => {
    tabs.value.$el.select('radio');
  };
</script>

<style scoped>
  /* 此样式仅用于演示目的。 */
  /* 标签页功能的正常运行并不需要此样式。 */
  .example-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 10px;
  }
</style>
```