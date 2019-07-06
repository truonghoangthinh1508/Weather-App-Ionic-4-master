import { Component, Input } from '@angular/core';

@Component({
    selector: 'empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
    @Input() query:string;
    constructor() {
    }

    ngOnInit() {}
}
