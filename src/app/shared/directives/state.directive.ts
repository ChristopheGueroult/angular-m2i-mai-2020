import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') nomClass: string;
  constructor() {
  }

  ngOnChanges(): void {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: string): string {
    return `state-${state.replace(/\s/g, '').toLowerCase()}`;
  }


}
// this.appState vaut Cancel => state-cancel
// this.appState vaut Option => state-option
// this.appState vaut Confirmed => state-confirmed
// Binder l'attribut class du host element td avec state-cancel, state-option ou state-confirmed
