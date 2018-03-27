import { IObserver, Observable } from '../../utils/observer';
import Dropdown from './Dropdown';

class DropdownManager {
    private _dropdowns: Observable = new Observable();
    constructor() {
        console.log('initialize DropdownManager');
        // only register the global event once
        this._bindEvents();
    }

    add(opts: object) {
        let dropdown = new Dropdown(opts);
        this._dropdowns.add(dropdown);
    }

    list() {
        return this._dropdowns.list();
    }

    _bindEvents() {
        console.log('bind events');
    }
}

export default new DropdownManager();