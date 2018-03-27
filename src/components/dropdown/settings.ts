let settings = {
    name: 'Dropdown',
    on: 'click',
    selectOnKeydown: true,
    keys: {
        backspace: 8,
        delimiter: 188, // comma
        deleteKey: 46,
        enter: 13,
        escape: 27,
        pageUp: 33,
        pageDown: 34,
        leftArrow: 37,
        upArrow: 38,
        rightArrow: 39,
        downArrow: 40
    },
    selector: {
        search: '.dropdown__search',
        menu: '.dropdown__menu',
        item: '.dropdown__item',
        unselectable: '.disabled'
    },
    className: {
        selected: 'selected',
        active: 'active',
        filtered: 'filtered',
        multiple: 'multiple'
    }
};

export default settings;