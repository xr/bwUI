import { Dropdown } from "@components/dropdown";
import { IObserver, Observable } from '@utils/observer';

declare let $;

class MouseEvent implements IObserver {
    private $module;
    private settings;
    private $search;
    private $menu;
    
    constructor(private dropdown: Dropdown) {
        console.log('construct mouse event');

        // for the events, we subscribe automatically
        this.subscribe(dropdown);

        this.$module = dropdown.get().$module;
        this.settings = dropdown.get().settings;
        this.$search = this.$module.children(this.settings.selector.search);
        this.$menu = this.$module.children(this.settings.selector.menu);

        this.$search.on('click', this.moduleHandler.bind(this));
        this.$menu.on('click', this.menuHandler.bind(this));
    }

    private moduleHandler() {
        console.log('handle mouse module', this.$module);
        console.log('this.settings', this.settings);
        this.$module.toggleClass(this.settings.className.active);
        //this.$module.addClass(this.settings.className.active);
    }

    private menuHandler(event) {
        let $target = $(event.target);
        // TODO: select item
        // change the search input text
        // close the module
        console.log('handle menu click', $target.text());
    }

    onUpdate(data) {
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