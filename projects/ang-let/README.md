# @awesome-ng/let

[![@awesome-ng/let build](https://github.com/artembelik/awesome-ng/actions/workflows/ang-let-build.yml/badge.svg)](https://github.com/artembelik/awesome-ng/actions/workflows/ang-let-build.yml)
[![npm version](https://img.shields.io/npm/v/@awesome-ng/let.svg?color=success)](https://npmjs.com/package/@awesome-ng/let)

### Simple angular structural directive for declaring and sharing data as local variable in template.

### [StackBlitz demo](https://stackblitz.com/edit/ang-let)

# Installation:

### Install with npm:

```
npm i @awesome-ng/let --save-dev
```

# Setup:

### Import `AngLetModule` into a module where you want to use `*angLet` directive:

```typescript
import { AngLetModule } from '@awesome-ng/let';

@NgModule({
	imports: [AngLetModule],
})
```

### Use `*angLet` directive in your template:

```angular2html
<ng-template *angLet="observable$ | async as value"> <!-- single subscription -->
	<h1>{{ value }}</h1>
	<h2>{{ value }}</h2>
	...
</ng-template>
```