# @awesome-ng/let

[![npm version](https://img.shields.io/npm/v/@awesome-ng/let.svg?color=success)](https://npmjs.com/package/@awesome-ng/let)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?color=blue)](./../../LICENSE)

### `*angLet` - is a structural directive that works like `*ngIf` but doesn't have a condition.

### Use it to declare/reuse computed values in multiple places in your template.

### It helps to avoid values recalculations (e.g pipes/observables/getters).

### [StackBlitz demo](https://stackblitz.com/edit/ang-let)

# Installation:

### Install with npm:

```
npm i @awesome-ng/let --save-dev
```

# Setup:

### Import `AngLetModule` into a module where you want to use `*angLet`:

```
import { AngLetModule } from '@awesome-ng/let';

@NgModule({
  imports: [AngLetModule],
})
```

### Add `*angLet` to the template:

```
<ng-template *angLet="observable$ | async as value">
    <h1>{{ value }}</h1>
    <h2>{{ value }}</h2>
    ...
</ng-template>
```