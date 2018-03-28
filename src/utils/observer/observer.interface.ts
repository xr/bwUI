import Observable from './observable.class';
// interface
export default interface IObserver {
	update(data?: any): void;
	subscribe(observable: Observable): void;
	unsubscribe(observable: Observable): void;
}