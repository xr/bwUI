import IObserver from './Observer';

export default class Observable {
	private observers: IObserver[] = [];

	constructor() {
	}

	add(observer: IObserver) {
		this.observers.push(observer);
	}

	remove(observer: IObserver) {
		this.observers.splice(this.observers.indexOf(observer), 1);
	}

	list() {
		return this.observers;
	}

	notify() {
		for (let observer in this.observers) {
			this.observers[observer].update();
		}
	}
}