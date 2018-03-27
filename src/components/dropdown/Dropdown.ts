import { IObserver } from '../../utils/observer';
import config from './config';

class Dropdown implements IObserver {
    private config: object = config;

    constructor(private opts: object) {
        console.log('initialize Dropdown');
        this.config = (<any>Object).assign({}, this.config, opts);
    }
    update() {
        console.log('call update');
    }
}


export default Dropdown;