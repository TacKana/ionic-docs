```tsx
import React, { useRef, useState } from 'react';
import { IonCheckbox, IonButton, CheckboxCustomEvent } from '@ionic/react';

function Example() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | undefined>();

  const agreeRef = useRef<HTMLIonCheckboxElement>(null);

  const validateCheckbox = (event: CheckboxCustomEvent<{ checked: boolean }>) => {
    setIsTouched(true);
    setIsValid(event.detail.checked);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (agreeRef.current) {
      validateCheckbox({ detail: { checked: agreeRef.current.checked } } as CheckboxCustomEvent<{
        checked: boolean;
      }>);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <IonCheckbox
          ref={agreeRef}
          className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${
            isTouched ? 'ion-touched' : ''
          }`}
          helperText="请在继续前同意相关条款"
          errorText="您必须同意条款才能继续"
          onIonChange={(event) => validateCheckbox(event)}
        >
          我同意相关条款和条件
        </IonCheckbox>

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