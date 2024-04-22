import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from "@ionic/react"

export const IonAccordionComponent = () => {
  return (
    <div>
      <IonAccordionGroup>
        
        <IonAccordion value="one">
          <IonItem slot="header" color="light">
            <IonLabel>¿Que es Ionic?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, in!
          </div>
        </IonAccordion>
        
        <IonAccordion value="two">
          <IonItem slot="header" color="light">
            <IonLabel>¿Que es Ionic React?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, in!
          </div>
        </IonAccordion>
        
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>¿Como funcionan los hooks en React?</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, in!
          </div>
        </IonAccordion>

      </IonAccordionGroup>
    </div>
  )
}
