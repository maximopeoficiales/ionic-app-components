import { IonButton, useIonActionSheet } from "@ionic/react"

export const IonActionSheet = () => {
  const [present] = useIonActionSheet()
  return (
    <div>
      <p>IonActionSheet</p>
      <IonButton
        onClick={() => {
          present({
            header: "Mi Action Sheet",
            subHeader: "Subheader",
            buttons: [
              {
                text: "Delete",
                role: "destructive",
                data: {
                  action: "delete"
                },
              },
              {
                text: "Cancel",
                role: "cancel",
                data: {
                  action: "cancel"
                }
              }
            ]
          })
        }}
      >
        Open IonActionButton
      </IonButton>
    </div>
  )
}
