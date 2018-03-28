import IObserver from './observer.interface';

export default class Observable {
	protected observers: IObserver[] = [];

	constructor() {
		console.log('initialize obsevable');
	}

	protected list() {
		return this.observers;
	}

	getIdx(observer: IObserver) {
		return this.observers.indexOf(observer);
	}

	attach(observer: IObserver) {
		this.observers.push(observer);
		return this;
	}

	detach(observer: IObserver) {
		this.observers.splice(this.observers.indexOf(observer), 1);
	}

	notify(data?: any) {
		for (let observer in this.observers) {
			this.observers[observer].onUpdate();
		}
	}
}