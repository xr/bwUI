import { IObserver } from '@utils/observer';
import settings from './settings';
import { KeyboardEvent, MouseEvent } from './events';

class Dropdown implements IObserver {
    private _settings = settings;

    constructor(private $module, private opts?: object) {
        console.log('initialize Dropdown with $module:', $module);
        this._settings = (<any>Object).assign({}, this._settings, opts);
        this._bindEvents();
    }

    _bindEvents() {
        let keyboardEvent = new KeyboardEvent(this.$module, this._settings);
        let mouseEvent = new MouseEvent(this.$module, this._settings);
    }

    update() {
        console.log('initialize Dropdown');
    }
}


export default Dropdown;