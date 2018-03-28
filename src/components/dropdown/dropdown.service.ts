class DropdownService {
    private $search;
    private $menu;

    constructor(private $module, private _settings) {
    }

    toggle() {
        this.$module.toggleClass(this._settings.className.active);
    }
}

export default DropdownService;