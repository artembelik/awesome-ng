import { AngLetDirective } from './ang-let.directive';

export class AngLetContext<T> {
	constructor(
		private readonly angLetDirective: AngLetDirective<T>,
	) {
	}

	get $implicit(): T {
		return this.angLetDirective.angLet;
	}

	get angLet(): T {
		return this.angLetDirective.angLet;
	}
}