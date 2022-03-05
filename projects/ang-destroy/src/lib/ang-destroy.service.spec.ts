import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngDestroyService } from './ang-destroy.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
	template: '',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		AngDestroyService,
	],
})
class TestComponent {
	subject$ = new Subject<void>();
	counter = 0;

	constructor(
		destroy$: AngDestroyService,
	) {
		this.subject$.pipe(
			takeUntil(destroy$),
		).subscribe(() => this.counter++);
	}
}

describe(
	'AngDestroyService',
	() => {
		let testComponentFixture: ComponentFixture<TestComponent>;

		beforeEach(() => {
			TestBed.configureTestingModule({
				declarations: [
					TestComponent,
				],
			});

			testComponentFixture = TestBed.createComponent(TestComponent);
		});

		it(
			'completes Subscription when component destroy',
			() => {
				testComponentFixture.componentInstance.subject$.next();
				testComponentFixture.componentInstance.subject$.next();
				testComponentFixture.componentInstance.subject$.next();

				testComponentFixture.destroy();

				testComponentFixture.componentInstance.subject$.next();
				testComponentFixture.componentInstance.subject$.next();

				expect(testComponentFixture.componentInstance.counter).toBe(3);
			},
		);
	},
);
