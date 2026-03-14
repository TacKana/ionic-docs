```tsx
import React from 'react';
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonContent fullscreen={true} className="ion-padding">
        <h1>动物趣闻</h1>

        <h2>犀牛</h2>
        <img
          alt="rhino standing near grass"
          src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />
        <p>
          犀牛的名字来源于它最显著的特征之一：它的角。Rhinoceros（犀牛）这个词来自希腊语的rhino（意为“鼻子”）和ceros（意为“角”）。
          不同种类的犀牛拥有的角数量不同。两种非洲犀牛（黑犀牛和白犀牛）以及苏门答腊犀牛都有两只角，而爪哇犀牛和独角犀牛则只有一只角。
        </p>

        <h2>海龟</h2>
        <img
          alt="brown sea turtle in water"
          src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        />
        <p>
          海龟的特征是拥有大型流线型的外壳，以及无法缩回的头部和四肢。与其他龟类不同，海龟无法将四肢和头部缩入壳内。
          它们的四肢是适应游泳的鳍状肢，因此在陆地上时显得尤为脆弱。
        </p>

        <h2>长颈鹿</h2>
        <img
          alt="giraffe sticking its tongue out"
          src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
        />
        <p>
          长颈鹿以其高大修长的外形而闻名。它们的背部有一个类似骆驼的小驼峰，身上的斑纹则与豹子相似。
          正因为这些特征的结合，有些人称长颈鹿为“骆驼豹”。长颈鹿的学名“camelopardalis”便由此而来。
        </p>

        <h2>大象</h2>
        <img
          alt="two grey elephants on grass plains during sunset"
          src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
        />
        <p>
          大象是现存最大的陆地动物，拥有庞大的身躯、大耳朵和长长的象鼻。
          大象的长鼻功能多样，可用于拾取物品、发出警告声、与其他大象打招呼，或吸水饮用和洗澡。
        </p>

        <h2>海豚</h2>
        <img
          alt="black and white dolphin in water"
          src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />
        <p>
          海豚的颜色因种类而异，从白色、珍珠色、粉色到较深的棕色、灰色、蓝色和黑色不等。
          它们皮肤光滑，有鳍状肢和背鳍，长而细的吻部约有100颗牙齿，身体呈流线型。
          头顶有一个喷水孔，孔盖打开后会露出一对鼻孔。海豚浮出水面时，就是用这些鼻孔进行呼吸的。
        </p>
      </IonContent>
      <IonFooter translucent={true}>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```