```html
<template>
  <ion-button @click="openPopover">点击我</ion-button>
  <p>{{ roleMsg }}</p>
</template>

<script lang="ts">
  import { IonButton, popoverController } from '@ionic/vue';
  import Popover from './Popover.vue';

  export default {
    components: { IonButton },
    data() {
      return {
        roleMsg: '',
      };
    },
    methods: {
      async openPopover(ev: Event) {
        const popover = await popoverController.create({
          component: Popover,
          event: ev,
        });
        await popover.present();

        const { role } = await popover.onDidDismiss();
        this.roleMsg = `弹出框已关闭，角色为: ${role}`;
      },
    },
  };
</script>
```