import { NgModule } from '@angular/core';
import { AngLetDirective } from './ang-let.directive';

@NgModule({
	declarations: [
		AngLetDirective,
	],
	exports: [
		AngLetDirective,
	],
})
export class AngLetModule {
}
