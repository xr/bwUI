import { IObserver, Observable } from '@utils/observer';
import { KeyboardEvent, MouseEvent } from './events';
import { DropdownManager } from '@components/dropdown';
import settings from './settings';
import DropdownHelper from './dropdownHelper.class';

class Dropdown extends Observable implements IObserver {
    private settings = settings;
    private helper;
    private selected;
    private invokeQueue = [];
    private dropdownManager; // will store the observable the dropdown subscribe to

    constructor(private $module, private opts?: object) {
        super();
        console.log('initialize Dropdown with $module:', $module);
        this.settings = (<any>Object).assign({}, this.settings, opts);
        this.helper = new DropdownHelper(this);
        this.bindEvents();
    }

    private bindEvents() {
        let keyboardEvent = new KeyboardEvent(this);
        let mouseEvent = new MouseEvent(this);
    }

    private digest() {
        this.invokeQueue.forEach((cb) => {
            cb.call(this, this.selected);
        });
    }

    get() {
        return {
            $module: this.$module,
            settings: this.settings,
            helper: this.helper
        }
    }

    getSelected() {
        return this.selected;
    }

    // act as event listeners register
    // listeners can be invoked from `digest` method
    onUpdate(cb) {
        this.invokeQueue.push(cb);
    }

    // act as observable, override the notify method of observable
    notify(data?: any) {
        console.log('get some data from events', data);
        // for now no need to check the events, just store the payload
        this.selected = [ data.payload ];

        // if dropdown has any observable, then notify it
        if (this.dropdownManager) {
            this.dropdownManager.notify({
                name: this.settings.name,
                data: 'hello'
            });
        }

        this.digest();
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

    update() {
        console.log('Dropdown: some thing happend on the subscribed dropdownManager');
    }
}


export default Dropdown;