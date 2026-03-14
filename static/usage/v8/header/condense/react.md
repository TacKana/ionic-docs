```tsx
import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>页眉</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">页眉</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="ion-padding">
          <h1>动物趣闻</h1>

          <h2>犀牛</h2>
          <img
            alt="rhino standing near grass"
            src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          />
          <p>
            犀牛的名字来源于其最显著的特征之一：它的角。Rhinoceros（犀牛）一词源自希腊语 rhino（意为“鼻子”）和 ceros（意为“角”）。不同种类的犀牛拥有不同数量的角。两种非洲犀牛（黑犀牛和白犀牛）以及苏门答腊犀牛有两个角，而爪哇犀牛和独角犀牛则只有一个角。
          </p>

          <h2>海龟</h2>
          <img
            alt="brown sea turtle in water"
            src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          />
          <p>
            海龟的特征是拥有一个大型、流线型的龟壳，且头部和四肢无法缩回壳内。与其他龟类不同，海龟不能将其四肢和头部缩入壳中。它们的四肢是为游泳而适应的鳍状肢，因此在陆地上时非常脆弱。
          </p>

          <h2>长颈鹿</h2>
          <img
            alt="giraffe sticking its tongue out"
            src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
          />
          <p>
            长颈鹿以其细长、高大的外形而闻名。它们的背部有一个类似骆驼的小驼峰，并且拥有类似豹子的斑点图案。由于这些特征的结合，有些人称长颈鹿为“骆驼豹”。这就是长颈鹿的物种名称“camelopardalis”的由来。
          </p>

          <h2>大象</h2>
          <img
            alt="two grey elephants on grass plains during sunset"
            src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
          />
          <p>
            大象是现存最大的陆地动物，拥有庞大的身躯、大耳朵和长长的鼻子。大象的长鼻子是多功能的。它们用来拾取物体、发出警告声、问候其他大象，或者吸水饮用或洗澡。
          </p>

          <h2>海豚</h2>
          <img
            alt="black and white dolphin in water"
            src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          />
          <p>
            海豚的颜色因种类而异，从白色、珍珠色和粉色到更深的棕色、灰色、蓝色和黑色。它们拥有光滑的皮肤、鳍状肢和一个背鳍。它们有一个细长的吻部，大约有100颗牙齿，以及流线型的身体。它们头顶有一个呼吸孔，上面有一个可打开的瓣膜，露出一对鼻孔。海豚浮出水面时使用这些鼻孔进行呼吸。
          </p>
        </div>
      </IonContent>
    </>
  );
}
export default Example;
```