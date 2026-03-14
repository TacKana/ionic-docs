```tsx
import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>标题</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">标题</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="ion-padding">
          <h1>动物趣闻</h1>

          <h2>犀牛</h2>
          <img
            alt="站在草丛旁的犀牛"
            src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          />
          <p>
            犀牛的名字来源于其最显著的特征之一：它的角。Rhinoceros（犀牛）这个词来自希腊语 rhino（意为“鼻子”）和 ceros（意为“角”）。不同物种的犀牛角数量有所不同。两种非洲犀牛（黑犀牛和白犀牛）以及苏门答腊犀牛有两个角，而爪哇犀牛和印度犀牛只有一个角。
          </p>

          <h2>海龟</h2>
          <img
            alt="水中的褐色海龟"
            src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          />
          <p>
            海龟的特征是拥有大型流线型甲壳，且头部和四肢无法缩回壳内。与其他龟类不同，海龟无法将四肢和头部缩入甲壳中。它们的四肢是适应游泳的鳍状肢，因此在陆地上时非常脆弱。
          </p>

          <h2>长颈鹿</h2>
          <img
            alt="伸出舌头的长颈鹿"
            src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
          />
          <p>
            长颈鹿以其高大修长的外形而闻名。它们背部有一个类似骆驼的小驼峰，身上的斑纹与豹子相似。由于这些特征的结合，有些人称长颈鹿为“骆驼豹”。这也是长颈鹿的物种名称“camelopardalis”的由来。
          </p>

          <h2>大象</h2>
          <img
            alt="日落时分草原上的两只灰象"
            src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
          />
          <p>
            大象是现存最大的陆生动物，拥有庞大的身躯、大耳朵和长鼻子。大象的长鼻子具有多功能性：可用于拾取物品、发出警告鸣叫、问候其他大象，或吸水用于饮用和洗澡。
          </p>

          <h2>海豚</h2>
          <img
            alt="水中的黑白海豚"
            src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          />
          <p>
            海豚的颜色因物种而异，从白色、珍珠色、粉色到较深的棕色、灰色、蓝色和黑色都有。它们拥有光滑的皮肤、鳍状肢和背鳍。它们的吻部细长，约有100颗牙齿，身体呈流线型。头顶有一个喷水孔，孔上的瓣膜打开后会露出一对鼻孔。海豚浮出水面时就用这些鼻孔呼吸。
          </p>
        </div>
      </IonContent>
    </>
  );
}
export default Example;
```