import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngLetModule } from './ang-let.module';
import { Observable, of } from 'rxjs';

@Component({
	template: `
		<ng-container *angLet="booleanValue as value">{{ value }}</ng-container>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
class BooleanTestComponent {
	booleanValue: boolean = false;
}

@Component({
	template: `
		<ng-container *angLet="observable$ | async as value">{{ value }}</ng-container>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
class ObservableTestComponent {
	observable$: Observable<string> = of('❤️');
}

describe(
	'AngLetDirective',
	() => {
		let booleanTestComponentFixture: ComponentFixture<BooleanTestComponent>;
		let observableTestComponentFixture: ComponentFixture<ObservableTestComponent>;

		beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [
					AngLetModule,
				],
				declarations: [
					BooleanTestComponent,
					ObservableTestComponent,
				],
			});

			booleanTestComponentFixture = TestBed.createComponent(BooleanTestComponent);
			observableTestComponentFixture = TestBed.createComponent(ObservableTestComponent);
		});

		it(
			'may Boolean',
			() => {
				booleanTestComponentFixture.detectChanges();
				expect(booleanTestComponentFixture.nativeElement.textContent).toBe('false');
			},
		);

		it(
			'may Observable',
			fakeAsync(() => {
				observableTestComponentFixture.detectChanges();
				tick();
				observableTestComponentFixture.detectChanges();
				expect(observableTestComponentFixture.nativeElement.textContent).toBe('❤️');
			}),
		);
	},
);
  