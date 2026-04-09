import { Component, signal } from '@angular/core';
import { TngIcon } from '@tailng-ui/icons';
import { TngInput, TngInputGroup, TngPrefix, TngSuffix } from '@tailng-ui/primitives';

@Component({
  selector: 'app-input-group',
  imports: [TngIcon, TngInput, TngInputGroup, TngPrefix, TngSuffix],
  templateUrl: './input-group.component.html',
})
export class InputGroupComponent {
  readonly headlessInputGroupExamplesTailwindClearActionQuery = signal('design tokens');
  
  onHeadlessInputGroupExamplesTailwindClearActionInput(event: Event): void {
    this.headlessInputGroupExamplesTailwindClearActionQuery.set(
      (event.target as HTMLInputElement).value,
    );
  }
  
  clearHeadlessInputGroupExamplesTailwindClearActionQuery(): void {
    this.headlessInputGroupExamplesTailwindClearActionQuery.set('');
  }
}
