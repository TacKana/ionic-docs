```tsx
import React, { useRef, useState } from 'react';
import { IonSelect, IonSelectOption, IonButton, SelectCustomEvent } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const favFruitRef = useRef<HTMLIonSelectElement>(null);

  const validateSelect = (event: SelectCustomEvent<{ value: string }>) => {
    setIsValid(event.detail.value ? true : false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  const onIonBlur = () => {
    markTouched();

    if (favFruitRef.current) {
      validateSelect({ detail: { value: favFruitRef.current.value } } as SelectCustomEvent<{
        value: string;
      }>);
    }
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    markTouched();

    if (favFruitRef.current) {
      validateSelect({ detail: { value: favFruitRef.current.value } } as SelectCustomEvent<{
        value: string;
      }>);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <IonSelect
          ref={favFruitRef}
          label="最喜欢的水果"
          placeholder="选择水果"
          className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
            isTouched ? 'ion-touched' : ''
          }`}
          helperText="请选择您最喜欢的水果"
          errorText="此字段为必填项"
          onIonChange={(event) => validateSelect(event)}
          onIonBlur={onIonBlur}
        >
          <IonSelectOption value="apple">苹果</IonSelectOption>
          <IonSelectOption value="banana">香蕉</IonSelectOption>
          <IonSelectOption value="orange">橙子</IonSelectOption>
        </IonSelect>

        <br />

        <IonButton type="submit" size="small">
          提交
        </IonButton>
      </form>
    </>
  );
}

export default Example;
```