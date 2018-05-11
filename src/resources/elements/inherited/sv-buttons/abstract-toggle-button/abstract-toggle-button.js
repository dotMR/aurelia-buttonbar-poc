import { bindable } from 'aurelia-framework';

export class AbstractToggleButton {

  @bindable iconName;
  @bindable tooltipKey;
  @bindable object;

  buttonAction() {
    alert(`I am a ${this.object}`);
  }
}