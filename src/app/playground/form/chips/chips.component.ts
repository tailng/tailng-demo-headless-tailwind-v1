import { Component, computed, signal } from '@angular/core';
import { TngChip, TngChipRemove, TngChips } from '@tailng-ui/primitives';

const HEADLESS_CHIPS_OVERVIEW_TAILWIND_SELECTED_SURFACES = Object.freeze([
  'Registry',
  'CLI',
  'Docs',
]);

const HEADLESS_CHIPS_EXAMPLES_TAILWIND_RELEASE_LANES = Object.freeze([
  'Stable',
  'Preview',
  'Canary',
]);

@Component({
  selector: 'app-chips',
  imports: [TngChips, TngChip, TngChipRemove],
  templateUrl: './chips.component.html',
})
export class ChipsComponent {
  readonly headlessChipsOverviewTailwindSelectedSurfaces = signal<readonly string[]>(
    HEADLESS_CHIPS_OVERVIEW_TAILWIND_SELECTED_SURFACES,
  );
  readonly headlessChipsOverviewTailwindSummary = computed(() => {
    const values = this.headlessChipsOverviewTailwindSelectedSurfaces();
    return values.length > 0 ? values.join(', ') : 'none';
  });

  onHeadlessChipsOverviewTailwindValuesChange(nextValues: readonly unknown[]): void {
    this.headlessChipsOverviewTailwindSelectedSurfaces.set(
      nextValues.filter((value): value is string => typeof value === 'string'),
    );
  }

  readonly headlessChipsExamplesTailwindReleaseLanes = signal<readonly string[]>(
    HEADLESS_CHIPS_EXAMPLES_TAILWIND_RELEASE_LANES,
  );
  readonly headlessChipsExamplesTailwindReleaseLaneSummary = computed(() => {
    const values = this.headlessChipsExamplesTailwindReleaseLanes();
    return values.length > 0 ? values.join(', ') : 'none';
  });

  onHeadlessChipsExamplesTailwindReleaseLanesChange(nextValues: readonly unknown[]): void {
    this.headlessChipsExamplesTailwindReleaseLanes.set(
      nextValues.filter((value): value is string => typeof value === 'string'),
    );
  }

  isHeadlessChipsExamplesTailwindReleaseLaneLocked(lane: string): boolean {
    return lane === 'Canary';
  }
  
}
