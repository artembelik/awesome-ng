# ang-let

[![npm version](https://img.shields.io/npm/v/@awesome-ng/let.svg)](https://npmjs.com/package/@awesome-ng/let)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

`*angLet` works like `*ngIf` but does not have a condition. Use it to declare/reuse computed value in several places in template to avoid pipes (async, etc) recalculations .

# Installation:
## Install with npm:
```
npm i @awesome-ng/let --save-dev
```

# Setup:

## Import `AngLetModule` into a module where you want to use `*angLet`:
```
import { AngLetModule } from '@awesome-ng/let';

@NgModule({
  imports: [AngLetModule],
})
```

## Add `*angLet` to the template:
```
<ng-template *angLet="observable$ | async as value">
    <div>{{ value }}</div>
    <div>{{ value }}</div>
</ng-template>
```