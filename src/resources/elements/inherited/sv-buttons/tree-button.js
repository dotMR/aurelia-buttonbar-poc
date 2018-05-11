import { customElement, useView } from 'aurelia-framework';
import { AbstractToggleButton } from './abstract-toggle-button/abstract-toggle-button';

@customElement("tree-button")
@useView(PLATFORM.moduleName('./abstract-toggle-button/abstract-toggle-button.html'))
export class TreeButton extends AbstractToggleButton{

  constructor() {
    super();
    this.object = 'tree';
    this.iconName = 'fa-tree';
    this.tooltipKey = 'tooltip-tree';
  }
}