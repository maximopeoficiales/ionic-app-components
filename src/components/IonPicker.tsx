import { IonPicker, IonPickerColumn, IonPickerColumnOption } from "@ionic/react"

export const IonPickerComponent = () => {
  return (
    <div>
      <IonPicker>
        <IonPickerColumn value="javascript" >
          <IonPickerColumnOption value="" disabled={true}>
            --
          </IonPickerColumnOption>
          <IonPickerColumnOption value="javascript">Javascript</IonPickerColumnOption>
          <IonPickerColumnOption value="typescript">Typescript</IonPickerColumnOption>
          <IonPickerColumnOption value="rust">Rust</IonPickerColumnOption>
          <IonPickerColumnOption value="c#">C#</IonPickerColumnOption>
        </IonPickerColumn>
      </IonPicker>

    </div>
  )
}
