import { Dropdown } from "@components/dropdown";
import { IObserver, Observable } from '@utils/observer';

declare let $;

class MouseEvent implements IObserver {
    private $module;
    private settings;
    private helper;
    private $search;
    private $menu;

    constructor(private dropdown: Dropdown) {
        console.log('construct mouse event');

        // assign the public properties from dropdown
        (<any>Object).assign(this, dropdown.get());

        let { search, menu } = this.settings.selector;
        this.$search = this.$module.children(search);
        this.$menu = this.$module.children(menu);

        // for the events, we subscribe automatically
        this.subscribe(dropdown);
        this.bindEvent();
    }

    private bindEvent() {
        this.$search.on('click', this.moduleHandler.bind(this));
        this.$menu.on('click', this.menuHandler.bind(this));
    }

    private moduleHandler() {
        this.helper.toggle();
    }

    private menuHandler(event) {
        let $target = $(event.target);
        this.helper.selectItem($target);
        let selectedValue = $target.data('value');
        this.dropdown.notify({
            event: 'mouse',
            payload: selectedValue
        });
    }

    update(data) {
        // no need for now
        console.log('MouseEvent: some thing happend from the observable dropdown', data);
    }

    subscribe(dropdown: Observable) {
        dropdown.attach(this);
    }

    unsubscribe(dropdown: Observable) {
        dropdown.detach(this);
    }
}


export default MouseEvent;