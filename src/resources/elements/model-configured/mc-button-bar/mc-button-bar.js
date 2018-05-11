import { bindable, customElement } from 'aurelia-framework';

@customElement("mc-button-bar")
export class McButtonBar {

    constructor() {
        this.icons = [
            {
                iconName: 'fa-crow',
                tooltipKey: 'tooltip-crow',
                animal: 'Crow'
            },
            {
                iconName: 'fa-ambulance',
                tooltipKey: 'tooltip-ambulance',
                animal: 'Ambulance'
            },
            {
                iconName: 'fa-fighter-jet',
                tooltipKey: 'tooltip-jet',
                animal: 'Fighter Jet'
            }
        ];
    }
}