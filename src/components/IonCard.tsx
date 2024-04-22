import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react"
import { heart, shareSocial } from "ionicons/icons"

export const IonCardComponent = () => {
  return (
    <div>
      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>Maximo Apaza</IonCardTitle>
          <IonCardSubtitle>Backend Developer</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis veniam magni iste praesentium aliquid nihil pariatur nemo excepturi fugit.
        </IonCardContent>
        <IonButton fill="clear">
          <IonIcon slot='start' icon={heart} />
          Follow
        </IonButton>
        <IonButton fill="clear">
          <IonIcon slot='start' icon={shareSocial} />
          Redes sociales
        </IonButton>
      </IonCard>
      <IonGrid >
        <IonCard>
          <IonRow>
            <IonCol className="p-3 ">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" className="h-full w-auto rounded-xl" />
            </IonCol>
            <IonCol >
              <IonCardHeader>
                <IonCardTitle>Maximo Apaza</IonCardTitle>
                <IonCardSubtitle>Backend Developer</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis veniam magni iste praesentium aliquid nihil pariatur nemo excepturi fugit.
              </IonCardContent>
              <div className="flex justify-end">
                <IonButton fill="clear">
                  <IonIcon slot='icon-only' icon={shareSocial} />
                </IonButton>
                <IonButton fill="clear">
                  <IonIcon slot='icon-only' icon={heart} color="danger" />
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonCard>
      </IonGrid>

    </div>
  )
}
