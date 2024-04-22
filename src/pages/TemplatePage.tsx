import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { ReactNode } from "react"

interface MyProps {
  title: string
  children: ReactNode
}
export const TemplatePage = ({ children, title }: MyProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {children}
      </IonContent>
    </IonPage>
  )
}
