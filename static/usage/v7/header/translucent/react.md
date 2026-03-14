```tsx
import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <h1>动物趣闻</h1>

        <h2>犀牛</h2>
        <img
          alt="站立于草地旁的犀牛"
          src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />
        <p>
          犀牛得名于其最显著的特征之一：角。"犀牛"一词源自古希腊语，"rhino"意为"鼻子"，"ceros"意为"角"。不同种类的犀牛角数各异：非洲的两种犀牛（黑犀牛和白犀牛）以及苏门答腊犀牛拥有两只角，而爪哇犀牛和独角犀牛则仅有一只角。
        </p>

        <h2>海龟</h2>
        <img
          alt="水中的棕色海龟"
          src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        />
        <p>
          海龟的特征包括硕大流线型的甲壳，以及无法缩入壳内的头部与四肢。与其他龟类不同，海龟无法将四肢和头部缩回甲壳。其四肢已演化为适于游泳的鳍状肢，因此在陆地上时非常脆弱。
        </p>

        <h2>长颈鹿</h2>
        <img
          alt="伸出舌头的长颈鹿"
          src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
        />
        <p>
          长颈鹿以其修长高挑的外形著称。它们背部有类似骆驼的小驼峰，身披类似豹子的斑点花纹。由于这些特征的结合，曾有人称长颈鹿为"骆驼豹"，这也正是其物种名"camelopardalis"的由来。
        </p>

        <h2>大象</h2>
        <img
          alt="日落时分草原上的两只灰色大象"
          src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
        />
        <p>
          大象是现存最大的陆地动物，拥有庞大的身躯、巨大的耳朵和长长的象鼻。象鼻功能多样：可用于拾取物品、发出警告声、问候同伴，或吸水饮用及沐浴。
        </p>

        <h2>海豚</h2>
        <img
          alt="水中的黑白海豚"
          src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />
        <p>
          不同种类的海豚体色各异，从白色、珍珠色、粉色到深褐色、灰色、蓝色及黑色不等。它们拥有光滑的皮肤、鳍状肢和背鳍，修长的吻部约含100颗牙齿，身体呈流线型。头顶有单个呼吸孔，孔盖开启后可见一对鼻孔，海豚浮出水面时即通过这对鼻孔呼吸。
        </p>
      </IonContent>
    </>
  );
}
export default Example;
```