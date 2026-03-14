```html
<ion-button id="buttonToFocus" fill="outline">按钮</ion-button>

<ion-radio-group value="a">
  <ion-radio id="radioToFocus" value="a">单选框</ion-radio>
</ion-radio-group>

<br />

<ion-button onClick="focusElement('#buttonToFocus')">聚焦按钮</ion-button>
<ion-button onClick="focusElement('#radioToFocus')">聚焦单选框</ion-button>

<script>
  function focusElement(id) {
    const el = document.querySelector(id);

    const app = el.closest('ion-app');
    if (app) {
      app.setFocus([el]);
    }
  }
</script>
```