import { IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
export const IonButtons = () => {
  const onClickBtn = () => {
    console.log('test')
  }
  return (
    <div>
      <p>IonButton</p>
      <IonButton onClick={onClickBtn}>Ir a la web</IonButton>
      <IonButton disabled>Disabled</IonButton>
      <IonButton expand='block'>Block</IonButton>
      <IonButton expand='full'>Full</IonButton>

      <p>Shape</p>
      <IonButton shape='round'>Round</IonButton>

      <p>Fill</p>
      <IonButton fill='clear'>Clear</IonButton>
      <IonButton fill='outline'>Outline</IonButton>
      <IonButton fill='solid'>Solid</IonButton>

      <p>Size</p>
      <IonButton size='small'>Small</IonButton>
      <IonButton size='default'>Default</IonButton>
      <IonButton size='large'>Large</IonButton>

      <p>Icon</p>
      <IonButton>
        <IonIcon slot='start' icon={star} />
        Left icon
      </IonButton>
      <IonButton>
        <IonIcon slot='end' icon={star} />
        Left icon
      </IonButton>
      <IonButton>
        <IonIcon slot='icon-only' icon={star} />
      </IonButton>

    </div>
  )
}
