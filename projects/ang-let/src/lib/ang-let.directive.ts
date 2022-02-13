import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AngLetContext } from './ang-let-context';

@Directive({
	selector: '[angLet]',
})
export class AngLetDirective<T> {
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

	static ngTemplateContextGuard<T>(
		dir: AngLetDirective<T>,
		ctx: any,
	): ctx is AngLetDirective<T> {
		return true;
	}
}
