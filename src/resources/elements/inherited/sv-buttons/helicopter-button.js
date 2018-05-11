import { customElement, useView } from 'aurelia-framework';
import { AbstractToggleButton } from './abstract-toggle-button/abstract-toggle-button';

@customElement("helicopter-button")
@useView(PLATFORM.moduleName('./abstract-toggle-button/abstract-toggle-button.html'))
export class HelicopterButton extends AbstractToggleButton{

  constructor() {
    super();
    this.object = 'helicopter';
    this.iconName = 'fa-helicopter';
    this.tooltipKey = 'tooltip-helicopter';
  }
}