import { DropdownManager, Dropdown } from '@bwui';

declare let $;

let dropdown = new Dropdown(
    $('.dropdown'),
    {
        name: 'dropdown1'
    });

dropdown.onUpdate((data) => {
    console.log('oh cool, dropdown select some data', data);
});



//let dropdownManager = new DropdownManager();
// dropdownManager.notify();
//dropdown.subscribe(dropdownManager);
// let dropdown2 = new Dropdown(
//     $('.dropdown'),
//     {
//         name: 'dropdown2'
//     }
// );
// dropdown2.subscribe(dropdownManager);

//dropdown.notify();
