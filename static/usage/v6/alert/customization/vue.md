```html
<template>
  <ion-button @click="presentAlert">点击我</ion-button>
</template>

<script lang="ts">
  import { IonButton, alertController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const presentAlert = async () => {
        const alert = await alertController.create({
          header: '确定吗？',
          cssClass: 'custom-alert',
          buttons: [
            {
              text: '否',
              cssClass: 'alert-button-cancel',
            },
            {
              text: '是',
              cssClass: 'alert-button-confirm',
            },
          ],
        });

        await alert.present();
      };

      return { presentAlert };
    },
  };
</script>

<style>
  ion-alert.custom-alert {
    --backdrop-opacity: 0.7;
  }

  .custom-alert .alert-button-group {
    padding: 8px;
  }

  button.alert-button.alert-button-confirm {
    background-color: var(--ion-color-success);
    color: var(--ion-color-success-contrast);
  }

  .md button.alert-button.alert-button-confirm {
    border-radius: 4px;
  }

  .ios .custom-alert button.alert-button {
    border: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);
  }

  .ios button.alert-button.alert-button-cancel {
    border-right: 0;
    border-bottom-left-radius: 13px;
    border-top-left-radius: 13px;
  }

  .ios button.alert-button.alert-button-confirm {
    border-bottom-right-radius: 13px;
    border-top-right-radius: 13px;
  }
</style>
```