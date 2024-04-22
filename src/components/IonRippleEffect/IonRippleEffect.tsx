import { IonRippleEffect } from "@ionic/react"
import "./IonRippleEffect.css"
export const IonRippleEffectComponent = () => {
  return (
    <div className="wrapper">
      <p>IonRippleEffect</p>
      <div className="ion-activatable ripple-parent rectangle">
        <IonRippleEffect />
      </div>
    </div>
  )
}
