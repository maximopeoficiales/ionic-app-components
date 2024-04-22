import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from "@ionic/react"
import { home } from "ionicons/icons"
import { useState } from "react"

export const IonBreadcrumbsComponent = () => {
  const [maxItem, setMaxItem] = useState<number | undefined>(3)
  return (
    <div>
      <p>IonBreadCrumbs</p>
      <IonBreadcrumbs
        maxItems={maxItem}
        onIonCollapsedClick={() => setMaxItem(undefined)}
      >
        <IonBreadcrumb href="#home">
          <IonIcon slot="start" icon={home} />
          Home
        </IonBreadcrumb>
        <IonBreadcrumb href="#consolas">Consolas</IonBreadcrumb>
        <IonBreadcrumb href="#ps5">PS5</IonBreadcrumb>
        <IonBreadcrumb href="#juegos">Juegos</IonBreadcrumb>
      </IonBreadcrumbs>
    </div>
  )
}
