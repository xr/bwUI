import { IObserver, Observable } from '@utils/observer';
import { KeyboardEvent, MouseEvent } from './events';
import { DropdownManager } from '@components/dropdown';
import settings from './settings';

class Dropdown extends Observable implements IObserver {
    private settings = settings;
    private dropdownManager; // will store the observable the dropdown subscribe to

    constructor(private $module, private opts?: object) {
        super();
        console.log('initialize Dropdown with $module:', $module);
        this.settings = (<any>Object).assign({}, this.settings, opts);
        this.bindEvents();
    }

    private bindEvents() {
        let keyboardEvent = new KeyboardEvent(this);
        let mouseEvent = new MouseEvent(this);
    }

    get() {
        return {
            $module: this.$module,
            settings: this.settings
        }
    }

    // act as observable, override the notify method of observable
    notify(data?: any) {
        console.log('get some data from children', data);
        for (let observer in this.observers) {
			this.observers[observer].onUpdate(data);
        }

        // if dropdown has any observable, then notify it
        if (this.dropdownManager) {
            this.dropdownManager.notify({
                name: this.settings.name,
                data: 'hello'
            });
        }
    }

    // act as observer
    subscribe(dropdownManager: Observable) {
        this.dropdownManager = dropdownManager;
        this.dropdownManager.attach(this);
        console.log('successfully subscribe as idx', this.dropdownManager.getIdx(this));
    }

    unsubscribe(dropdownManager: Observable) {
        dropdownManager.detach(this);
    }

    onUpdate() {
        console.log('Dropdown: some thing happend on the subscribed dropdownManager');
    }
}


export default Dropdown;