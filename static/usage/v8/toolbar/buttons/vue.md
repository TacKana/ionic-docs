```html
<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button> 起始 </ion-button>
    </ion-buttons>
    <ion-title>起始 / 结束按钮</ion-title>
    <ion-buttons slot="end">
      <ion-button> 结束 </ion-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button> 次要 </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button> 主要 </ion-button>
    </ion-buttons>
    <ion-title>主要 / 次要按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button>
        <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>图标按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button fill="solid">
        <ion-icon slot="start" :icon="personCircle"></ion-icon>
        联系人
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button fill="solid">
        帮助
        <ion-icon slot="end" :icon="helpCircle"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>实心按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button fill="outline">
        <ion-icon slot="start" :icon="star"></ion-icon>
        收藏
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button fill="outline">
        编辑
        <ion-icon slot="end" :icon="create"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>轮廓按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="#"></ion-back-button>
    </ion-buttons>
    <ion-title>返回按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button :auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-title>菜单按钮</ion-title>
  </ion-toolbar>
</template>

<script setup lang="ts">
  import { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/vue';
  import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
</script>
```