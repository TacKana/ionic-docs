```html
<ion-accordion-group>
  <ion-accordion value="first">
    <ion-item slot="header">
      <ion-label>第一个手风琴项</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第一个内容</div>
  </ion-accordion>
  <ion-accordion value="second">
    <ion-item slot="header">
      <ion-label>第二个手风琴项</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第二个内容</div>
  </ion-accordion>
  <ion-accordion value="third">
    <ion-item slot="header">
      <ion-label>第三个手风琴项</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第三个内容</div>
  </ion-accordion>
</ion-accordion-group>

<style>
  ion-accordion {
    margin: 0 auto;
  }

  ion-accordion.accordion-expanding,
  ion-accordion.accordion-expanded {
    width: calc(100% - 32px);

    margin: 16px auto;
  }

  ion-accordion.accordion-collapsing ion-item[slot='header'],
  ion-accordion.accordion-collapsed ion-item[slot='header'] {
    --background: var(--ion-color-light);
    --color: var(--ion-color-light-contrast);
  }

  ion-accordion.accordion-expanding ion-item[slot='header'],
  ion-accordion.accordion-expanded ion-item[slot='header'] {
    --background: var(--ion-color-primary);
    --color: var(--ion-color-primary-contrast);
  }
</style>
```