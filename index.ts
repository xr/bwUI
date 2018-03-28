import { DropdownManager, Dropdown } from '@bwui';

declare let $;

let dropdownManager = new DropdownManager();
// dropdownManager.notify();
let dropdown = new Dropdown(
    $('.dropdown'),
    {
        name: 'dropdown1'
    });
dropdown.subscribe(dropdownManager);

// let dropdown2 = new Dropdown(
//     $('.dropdown'),
//     {
//         name: 'dropdown2'
//     }
// );
// dropdown2.subscribe(dropdownManager);

//dropdown.notify();
