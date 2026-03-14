```tsx
import React from 'react';
import { IonButton, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { menuController } from '@ionic/core/components';

function Example() {
  async function openFirstMenu() {
    /**
     * 通过菜单 ID 打开菜单
     * 我们使用 ID 来引用菜单，
     * 因为存在多个“起始”菜单。
     */
    await menuController.open('first-menu');
  }

  async function openSecondMenu() {
    /**
     * 通过菜单 ID 打开菜单
     * 我们使用 ID 来引用菜单，
     * 因为存在多个“起始”菜单。
     */
    await menuController.open('second-menu');
  }

  async function openEndMenu() {
    /**
     * 通过侧边位置打开菜单
     * 我们可以通过侧边位置来引用菜单，
     * 因为这里只有一个“结束”菜单。
     */
    await menuController.open('end');
  }

  return (
    <>
      <IonMenu menuId="first-menu" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>First Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">这是第一个菜单的内容。</IonContent>
      </IonMenu>

      <IonMenu menuId="second-menu" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Second Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">这是第二个菜单的内容。</IonContent>
      </IonMenu>

      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>End Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">这是结束菜单的内容。</IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>菜单</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>点击下方按钮以打开指定菜单。</p>

          <IonButton expand="block" onClick={openFirstMenu}>
            打开第一个菜单
          </IonButton>
          <IonButton expand="block" onClick={openSecondMenu}>
            打开第二个菜单
          </IonButton>
          <IonButton expand="block" onClick={openEndMenu}>
            打开结束菜单
          </IonButton>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Example;
```