import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react"
import { chevronForwardCircle, colorPalette, document, globe } from "ionicons/icons"

export const IonFabComponent = () => {
  return (
    <div>
      <p>IonFab</p>
      <IonContent className="ion-padding">

        <IonFab slot="fixed" vertical="top" horizontal="start">
          <IonFabButton>
            <IonIcon icon={chevronForwardCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side="end">
            <IonFabButton>
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>


    </div>
  )
}
