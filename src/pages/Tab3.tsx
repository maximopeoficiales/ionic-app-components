import { IonFabComponent, IonPickerComponent } from "../components";
import { IonAccordionComponent } from "../components/IonAccordion";
import { TemplatePage } from "./TemplatePage";
const Tab3: React.FC = () => {
  return (
    <TemplatePage title='IonAccordionComponent'>
      <IonAccordionComponent />
      <IonPickerComponent/>
      <IonFabComponent/>
    </TemplatePage>
  );
};

export default Tab3;
