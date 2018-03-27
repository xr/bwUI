import { IObserver } from '../../utils/observer';

class Dropdown implements IObserver {
    constructor(private opts: object) {
        console.log('initialize Dropdown');
    }
    update() {
        console.log('call update');
    }
}


export default Dropdown;