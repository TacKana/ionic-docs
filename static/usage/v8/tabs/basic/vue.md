```html
<template>
  <ion-tabs>
    <ion-tab tab="home">
      <ion-page id="home-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>正在播放</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">正在播放内容</div>
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
            <ion-title>媒体库</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">媒体库内容</div>
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
        正在播放
      </ion-tab-button>
      <ion-tab-button tab="radio">
        <ion-icon :icon="radio" />
        电台
      </ion-tab-button>
      <ion-tab-button tab="library">
        <ion-icon :icon="library" />
        媒体库
      </ion-tab-button>
      <ion-tab-button tab="search">
        <ion-icon :icon="search" />
        搜索
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
  import {
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
</script>

<style scoped>
  /* 此样式仅用于演示目的。 */
  /* 标签页功能正常运行不需要此样式。 */
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
```