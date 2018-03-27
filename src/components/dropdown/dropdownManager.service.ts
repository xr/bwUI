import { Observable } from '../../utils/observer';
import Dropdown from './dropdown.class';


class DropdownManager {
    private _dropdowns: Observable = new Observable();
    constructor() {
        console.log('initialize DropdownManager');
        // only register the global event once
        this._bindEvents();
    }

    add($module, opts?: object) {
        let dropdown = new Dropdown($module, opts);
        this._dropdowns.add(dropdown);
        return dropdown;
    }

    list() {
        return this._dropdowns.list();
    }

    _bindEvents() {
        console.log('bind events');
    }
}

export default new DropdownManager();