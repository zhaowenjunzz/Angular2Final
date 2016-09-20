import {NgModule} from '@angular/core';
import {MyTooltip, MyTooltipComponent} from './tooltip.directive';

@NgModule({
    declarations: [MyTooltip, MyTooltipComponent],
    exports: [MyTooltip],
    entryComponents: [MyTooltipComponent]
})
export class MyTooltipModule {}
