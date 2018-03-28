import { Dropdown } from '@components/dropdown';
import { IObserver, Observable } from '@utils/observer';

class KeyboardEvent implements IObserver {
    private $module;
    private _settings;

    constructor(private dropdown: Dropdown) {
        console.log('construct keyboard event');
        // for the events, we subscribe automatically
        this.subscribe(dropdown);

        this.$module = dropdown.get().$module;
        this._settings = dropdown.get().settings;
        this.$module.on('keydown', this.handler.bind(this));
    }

    private handler(event) {
        console.log('handle keydown module', this.$module);
        this.dropdown.notify('hahha');
    }

    onUpdate(data) {
        console.log('KeyboardEvent: some thing happend from the observable dropdown', data);
    }

    subscribe(dropdown: Observable) {
        dropdown.attach(this);
    }

    unsubscribe(dropdown: Observable) {
        dropdown.detach(this);
    }
}


export default KeyboardEvent;