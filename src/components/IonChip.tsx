import { IonAvatar, IonChip, IonIcon, IonLabel } from "@ionic/react"
import { close, closeCircle, pin } from "ionicons/icons"

export const IonChipComponent = () => {
  return (
    <div >
      <p>IonChip</p>
      <IonChip>Default</IonChip>
      <IonChip disabled={true}>Disabled</IonChip>
      <IonChip outline={true}>Outline</IonChip>

      <IonChip>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>Avatar Chip</IonLabel>
        <IonIcon icon={closeCircle}></IonIcon>
      </IonChip>

      <IonChip>
        <IonIcon icon={pin} color="primary"></IonIcon>
        <IonLabel>Icon Chip</IonLabel>
        <IonIcon icon={close}></IonIcon>
      </IonChip>
    </div>
  )
}
