```tsx
import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader collapse="fade">
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>动物趣闻</h1>

        <h2>犀牛</h2>
        <img
          alt="rhino standing near grass"
          src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />
        <p>
          犀牛这个名字来源于它最显著的特征之一：它的角。Rhinoceros 这个词来自希腊语，rhino 意为“鼻子”，ceros 意为“角”。不同种类的犀牛角数量各不相同。非洲的两种犀牛（黑犀牛和白犀牛）以及苏门答腊犀牛有两个角，而爪哇犀牛和独角犀牛只有一个角。
        </p>

        <h2>海龟</h2>
        <img
          alt="brown sea turtle in water"
          src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        />
        <p>
          海龟的特征是拥有一个大型的流线型外壳，以及无法缩回的头部和四肢。与其他龟类不同，海龟无法将四肢和头部缩回壳内。它们的四肢是适应游泳的鳍状肢，因此在陆地上时非常脆弱。
        </p>

        <h2>长颈鹿</h2>
        <img
          alt="giraffe sticking its tongue out"
          src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
        />
        <p>
          长颈鹿以其高大修长的外形而闻名。它们的背部有一个类似骆驼的小驼峰，身上的斑点图案又很像豹子。由于这些特征的结合，有些人称长颈鹿为“骆驼豹”。这也正是长颈鹿的物种学名“camelopardalis”的由来。
        </p>

        <h2>大象</h2>
        <img
          alt="two grey elephants on grass plains during sunset"
          src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
        />
        <p>
          大象是现存最大的陆地动物，拥有庞大的身躯、大耳朵和长长的鼻子。大象的长鼻子功能多样，可以用来拾取物体、发出警告声、与其他大象打招呼，或者吸水来喝或洗澡。
        </p>

        <h2>海豚</h2>
        <img
          alt="black and white dolphin in water"
          src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />
        <p>
          海豚的颜色因物种而异，从白色、珍珠色、粉色到棕色、灰色、蓝色和黑色等深色系不等。它们拥有光滑的皮肤、鳍状肢和背鳍。它们长着细长的口鼻部，约有100颗牙齿，身体呈流线型。它们的头顶有一个喷水孔，上面有一个可以打开的皮瓣，露出一对鼻孔。海豚浮出水面时就用这些鼻孔呼吸。
        </p>
      </IonContent>
    </>
  );
}
export default Example;
```