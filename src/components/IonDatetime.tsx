import { IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";

export const IonDatetimeComponent = () => {
  return (
    <div>
      <p>IonDatetime</p>
      <IonDatetimeButton datetime="datetime" />
      <IonModal keepContentsMounted={true} >
        <IonDatetime id="datetime" />
      </IonModal>
    </div>
  )
}
