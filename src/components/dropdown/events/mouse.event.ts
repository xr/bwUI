declare let $;

class MouseEvent {
    private $search;
    private $menu;
    
    constructor(private $module, private _settings) {
        console.log('construct mouse event');

        this.$search = $module.children(_settings.selector.search);
        this.$menu = $module.children(_settings.selector.menu);

        this.$search.on('click', this._moduleHandler.bind(this));
        this.$menu.on('click', this._menuHandler.bind(this));
    }

    _moduleHandler() {
        console.log('handle mouse module', this.$module);
        this.$module.toggleClass(this._settings.className.active);
    }

    _menuHandler(event) {
        let $target = $(event.target);
        // TODO: select item
        // change the search input text
        // close the module
        console.log('handle menu click', $target.text());
    }
}


export default MouseEvent;