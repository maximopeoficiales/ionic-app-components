import { IonActionSheet, IonAlert, IonBadges, IonBreadcrumbsComponent, IonCardComponent, IonCheckBoxComponent, IonChipComponent, IonDatetimeComponent, IonRippleEffectComponent } from '../components';
import { TemplatePage } from './TemplatePage';

const Tab1: React.FC = () => {
  return (
    <TemplatePage title='IonActionSheet'>
      <IonActionSheet />
      <IonAlert />
      <IonBadges />
      <IonBreadcrumbsComponent />
      <IonRippleEffectComponent />
      <IonCardComponent />
      <IonCheckBoxComponent />
      <IonChipComponent />
      <IonDatetimeComponent />
    </TemplatePage>
  );
};

export default Tab1;
