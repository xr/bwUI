import { Dropdown } from '@bwui';

class DropdownHelper {
    private $module;
    private settings;
    private $search;
    private $menu;
    private $item;

    constructor(dropdown: Dropdown) {
        console.log('initialize dropdownHelper: ', dropdown);
        (<any>Object).assign(this, dropdown.get());

        let { search, menu, item } = this.settings.selector;
        this.$search = this.$module.children(search);
        this.$menu = this.$module.children(menu);
        this.$item = this.$menu.children(item);
    }

    toggle() {
        this.$module.toggleClass(this.settings.className.active);
    }

    selectItem($target) {
        this.$search.val($target.text());
        this.$item.removeClass(this.settings.className.selected);
        $target.addClass(this.settings.className.selected);
        this.toggle();
    }
}

export default DropdownHelper;