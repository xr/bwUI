import { Observable } from '../../utils/observer';
import Dropdown from './dropdown.class';

class DropdownManager extends Observable {
    constructor() {
        super();
        console.log('initialize DropdownManager');
        // TODO: mechanism to register the global event once
        //this.bindEvents();
    }

    bindEvents() {
        console.log('bind events');
    }

    notify(data) {
        console.log('some thing happend from the child dropdowns', data);
    }
}

export default DropdownManager;