import { bindable } from 'aurelia-framework';

export class VcToggleButton {

  @bindable iconName;
  @bindable tooltipKey;
  @bindable animal;

  buttonAction() {
      alert(`I am a ${this.animal}`);
  }
}
