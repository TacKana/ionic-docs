```html
<ion-menu menu-id="first-menu" content-id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>第一个菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">这是第一个菜单的内容。</ion-content>
</ion-menu>

<ion-menu menu-id="second-menu" content-id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>第二个菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">这是第二个菜单的内容。</ion-content>
</ion-menu>

<ion-menu side="end" content-id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>右侧菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">这是右侧菜单的内容。</ion-content>
</ion-menu>

<div class="ion-page" id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>点击下方按钮打开特定菜单。</p>

    <ion-button expand="block" onclick="openFirstMenu()">打开第一个菜单</ion-button>
    <ion-button expand="block" onclick="openSecondMenu()">打开第二个菜单</ion-button>
    <ion-button expand="block" onclick="openEndMenu()">打开右侧菜单</ion-button>
  </ion-content>
</div>

<script>
  async function openFirstMenu() {
    /**
     * 通过 menu-id 打开菜单
     * 我们使用 ID 来引用菜单
     * 因为存在多个"起始"菜单。
     */
    await menuController.open('first-menu');
  }

  async function openSecondMenu() {
    /**
     * 通过 menu-id 打开菜单
     * 我们使用 ID 来引用菜单
     * 因为存在多个"起始"菜单。
     */
    await menuController.open('second-menu');
  }

  async function openEndMenu() {
    /**
     * 通过 side 打开菜单
     * 这里我们可以通过 side 来引用菜单
     * 因为只有一个"结束"菜单存在
     */
    await menuController.open('end');
  }
</script>
```