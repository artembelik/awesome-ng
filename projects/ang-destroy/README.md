# @awesome-ng/destroy

[![AngDestroyBuild](https://github.com/artembelik/awesome-ng/actions/workflows/ang-destroy-build.yml/badge.svg)](https://github.com/artembelik/awesome-ng/actions/workflows/ang-destroy-build.yml)
[![npm version](https://img.shields.io/npm/v/@awesome-ng/destroy.svg?color=success)](https://npmjs.com/package/@awesome-ng/destroy)

### Simple angular service, which help to complete subscriptions after component/directive destroy.

### [StackBlitz demo](https://stackblitz.com/edit/ang-destroy?devtoolsheight=50&file=src/app/app.component.ts)

# Installation:

### Install with npm:

```
npm i @awesome-ng/destroy --save-dev
```

# Setup:

### Add `AngDestroyService` to component/directive `providers` and `inject` it in constructor:

```typescript
import { AngDestroyService } from '@awesome-ng/destroy';
import { Observable, takeUntil } from 'rxjs';

@Component({
	providers: [AngDestroyService],
})
export class AppComponent {
	observable$: Observable<unknown>;

	constructor(destroy$: AngDestroyService) {
		this.observable$
			.pipe(takeUntil(destroy$))
			.subscribe();
	}
}
```