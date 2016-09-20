import {
    Directive,
    HostListener,
    Input,
    Component,
    ComponentFactoryResolver,
    ComponentFactory,
    ViewContainerRef,
    Injector,
    ComponentRef,
    OnInit,
    OnDestroy
} from '@angular/core';

@Directive({
    selector: '[my-tooltip]'
})
export class MyTooltip {

    @Input('my-tooltip')
    message: string;

    private _cRef: ComponentRef<MyTooltipComponent>;

    private _componentFactory: ComponentFactory<MyTooltipComponent>;

    constructor(private _resolver: ComponentFactoryResolver,
        private _vcr: ViewContainerRef,
        private _injector: Injector) {
        this._componentFactory = this._resolver.resolveComponentFactory(MyTooltipComponent);
    }

    @HostListener('mouseenter', ['$event'])
    public onMouseEnter(event: MouseEvent): void {

        if (this._cRef) {

            this.updateTooltipPosition(event);

            return;
        }

        this._cRef = this._vcr.createComponent(this._componentFactory);

        if (this.message && this.message.length !== 0) {
            this._cRef.instance.message = this.message;
            this.updateTooltipPosition(event);
        }
    }

    private updateTooltipPosition(event: MouseEvent): void {
        this._cRef.instance.top = event.clientY;
        this._cRef.instance.left = event.clientX;
    }

    @HostListener('mouseleave', ['$event'])
    public onMouseLeave(event: MouseEvent): void {
        if (this._cRef) {
            let index = this._vcr.indexOf(this._cRef.hostView);
            if (index !== -1) {
                this._vcr.remove(index);
                this._cRef = null;
            }
        }
    }
}

@Component({
    selector: 'my-tooltip-component',
    template: `<div style="position:fixed;pointer-events:none;" 
                [style.top.px]="top" [style.left.px]="left">{{message}}</div>`,
})
export class MyTooltipComponent implements OnInit, OnDestroy {

    message: string = 'default message.';

    top: number = 0;

    left: number = 0;

    ngOnInit(): void {
        console.log('tootip component init');
    }

    ngOnDestroy(): void {
        console.log('tooltip component destroy');
    }
}
