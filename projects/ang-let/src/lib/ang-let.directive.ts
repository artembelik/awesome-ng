import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/** @internal */
class AngLetContext<T = unknown> {
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

@Directive({
	selector: '[angLet]',
})
export class AngLetDirective<T = unknown> {
	@Input() angLet!: T;

	constructor(
		@Inject(ViewContainerRef) viewContainerRef: ViewContainerRef,
		@Inject(TemplateRef) templateRef: TemplateRef<AngLetContext<T>>,
	) {
		viewContainerRef.createEmbeddedView(
			templateRef,
			new AngLetContext<T>(this),
		);
	}

	static ngTemplateGuard_angLet: 'binding';

	static ngTemplateContextGuard<T>(
		dir: AngLetDirective<T>,
		ctx: unknown,
	): ctx is AngLetContext<T> {
		return true;
	}
}
