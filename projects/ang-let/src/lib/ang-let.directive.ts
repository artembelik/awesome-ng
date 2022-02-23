import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/** @internal */
class AngLetContext<T = unknown> {
	constructor(
		private angLetDirective: AngLetDirective<T>,
	) {
	}

	get $implicit(): T {
		return this.angLetDirective.angLet;
	}

	get angLet(): T {
		return this.angLetDirective.angLet;
	}
}

/**
 * Simple structural directive for declaring and sharing data as local variable in angular template.
 * ```
 * <ng-template *angLet="observable$ | async as value">
 *     <h1>{{ value }}</h1>
 *     <h2>{{ value }}</h2>
 *     ...
 * </ng-template>
 * ```
 */
@Directive({
	selector: '[angLet]',
})
export class AngLetDirective<T = unknown> {
	@Input() angLet!: T;

	constructor(
		private viewContainerRef: ViewContainerRef,
		templateRef: TemplateRef<AngLetContext<T>>,
	) {
		viewContainerRef.createEmbeddedView(
			templateRef,
			new AngLetContext<T>(this),
		);
	}

	/**
	 * Assert the correct type of the expression bound to the `angLet` input within the template.
	 *
	 * The presence of this static field is a signal to the Ivy template type check compiler that
	 * when the `AngLetDirective` structural directive renders its template, the type of the expression bound
	 * to `angLet` should be narrowed in some way. For `AngLetDirective`, the binding expression itself is used to
	 * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `angLet`.
	 */
	static ngTemplateGuard_angLet: 'binding';

	/**
	 * Asserts the correct type of the context for the template that `angLet` will render.
	 *
	 * The presence of this method is a signal to the Ivy template type-check compiler that the
	 * `AngLetDirective` structural directive renders its template with a specific context type.
	 */
	static ngTemplateContextGuard<T>(
		dir: AngLetDirective<T>,
		ctx: unknown,
	): ctx is AngLetContext<T> {
		return true;
	}
}
