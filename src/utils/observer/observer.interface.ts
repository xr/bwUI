import Observable from './observable.class';
// interface
export default interface IObserver {
	onUpdate(data?: any): void;
	subscribe(observable: Observable): void;
	unsubscribe(observable: Observable): void;
}