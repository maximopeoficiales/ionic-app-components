import { IonButton, useIonAlert } from "@ionic/react"

export const IonAlert = () => {
  const [presentAlert] = useIonAlert()
  const deleteUser = () => {
    console.log('delete user')
  }
  const openAlert = () => {
    presentAlert({
      header: '¡Cuidado!',
      subHeader: 'Eliminar Cuenta',
      message: "¿Estas seguro de eliminar la cuenta?",
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Eliminar', role: 'confirm', handler: deleteUser },
      ]
    })
  }
  return (
    <div>
      <p>IonAlet</p>
      <IonButton onClick={openAlert}>Abrir Alerta</IonButton>
    </div>
  )
}
