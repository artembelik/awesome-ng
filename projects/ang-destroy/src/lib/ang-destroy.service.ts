import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Simple angular service, which help to complete subscriptions after component/directive destroy.
 * ```
 * import { AngDestroyService } from '@awesome-ng/destroy';
 * import { Observable, takeUntil } from 'rxjs';
 *
 * @Component({
 * 	providers: [AngDestroyService],
 * })
 * export class AppComponent {
 * 	observable$: Observable<unknown>;
 *
 * 	constructor(destroy$: AngDestroyService) {
 * 		this.observable$
 * 			.pipe(takeUntil(destroy$))
 * 			.subscribe();
 * 	}
 * }
 */
@Injectable({
	providedIn: 'root',
})
export class AngDestroyService extends Subject<void> implements OnDestroy {
	ngOnDestroy() {
		this.next();
		this.complete();
	}
}