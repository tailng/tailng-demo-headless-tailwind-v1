import { Component, signal } from '@angular/core';
import { TngToggle, TngToggleGroup } from '@tailng-ui/primitives';
type TailwindToggleViewMode = 'grid' | 'list' | 'split';
type TailwindFormattingOption = 'bold' | 'code' | 'mentions';

@Component({
  selector: 'app-toggle',
  imports: [TngToggle, TngToggleGroup],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {
  readonly viewMode = signal<TailwindToggleViewMode>('grid');

  onViewModeChange(value: string | null): void {
    if (value === 'grid' || value === 'list' || value === 'split') {
      this.viewMode.set(value);
    }
  }

  readonly formatting = signal<readonly TailwindFormattingOption[]>(['mentions']);

  onFormattingChange(values: readonly string[]): void {
    this.formatting.set(
      values.filter((value): value is TailwindFormattingOption => value === 'bold' || value === 'code' || value === 'mentions'),
    );
  }

  readonly alertsEnabled = signal(true);
}