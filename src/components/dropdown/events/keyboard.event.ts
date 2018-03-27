class KeyboardEvent {    
    constructor(private $module, private _settings) {
        console.log('construct keyboard event');

        console.log(_settings);

        $module.on('keydown', this._handler.bind(this));
    }

    _handler(event) {
        console.log('handle keydown module', this.$module);
    }
}


export default KeyboardEvent;