```html
<ion-accordion-group expand="inset">
  <ion-accordion value="first">
    <ion-item slot="header" color="rose">
      <ion-label>第一个手风琴</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第一个内容</div>
  </ion-accordion>
  <ion-accordion value="second">
    <ion-item slot="header" color="rose">
      <ion-label>第二个手风琴</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第二个内容</div>
  </ion-accordion>
  <ion-accordion value="third">
    <ion-item slot="header" color="rose">
      <ion-label>第三个手风琴</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第三个内容</div>
  </ion-accordion>
</ion-accordion-group>

<style>
  :root {
    --ion-color-rose: #fecdd3;
    --ion-color-rose-rgb: 254, 205, 211;
    --ion-color-rose-contrast: #000000;
    --ion-color-rose-contrast-rgb: 0, 0, 0;
    --ion-color-rose-shade: #e0b4ba;
    --ion-color-rose-tint: #fed2d7;
  }

  .ion-color-rose {
    --ion-color-base: var(--ion-color-rose);
    --ion-color-base-rgb: var(--ion-color-rose-rgb);
    --ion-color-contrast: var(--ion-color-rose-contrast);
    --ion-color-contrast-rgb: var(--ion-color-rose-contrast-rgb);
    --ion-color-shade: var(--ion-color-rose-shade);
    --ion-color-tint: var(--ion-color-rose-tint);
  }

  div[slot='content'] {
    background: rgba(var(--ion-color-rose-rgb), 0.25);
  }
</style>
```