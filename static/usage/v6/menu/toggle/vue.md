```html
<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>菜单内容</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-menu-toggle>
        <ion-button>点击关闭菜单</ion-button>
      </ion-menu-toggle>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-menu-toggle>
        <ion-button>点击打开菜单</ion-button>
      </ion-menu-toggle>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonHeader, IonMenu, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonContent,
      IonHeader,
      IonMenu,
      IonMenuToggle,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```