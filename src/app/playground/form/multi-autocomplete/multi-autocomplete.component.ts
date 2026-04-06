import { Component, computed, signal } from '@angular/core';
import {
  TngMultiAutocomplete,
  TngMultiAutocompleteChip,
  TngMultiAutocompleteContent,
  TngMultiAutocompleteListbox,
  TngMultiAutocompleteOption,
  TngMultiAutocompleteOverlay,
  TngMultiAutocompleteTrigger,
} from '@tailng-ui/primitives';

interface HeadlessOverviewTailwindLaunchMarketOption {
  readonly code: string;
  readonly label: string;
  readonly region: string;
}

const HEADLESS_OVERVIEW_TAILWIND_LAUNCH_MARKET_OPTIONS: readonly HeadlessOverviewTailwindLaunchMarketOption[] = Object.freeze([
  { code: 'ca', label: 'Canada', region: 'North America' },
  { code: 'de', label: 'Germany', region: 'Europe' },
  { code: 'id', label: 'Indonesia', region: 'Asia Pacific' },
  { code: 'in', label: 'India', region: 'Asia Pacific' },
  { code: 'jp', label: 'Japan', region: 'Asia Pacific' },
  { code: 'mx', label: 'Mexico', region: 'North America' },
  { code: 'es', label: 'Spain', region: 'Europe' },
]);

interface HeadlessStylingTailwindReleaseOwnerOption {
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly disabled?: boolean;
}

const HEADLESS_STYLING_TAILWIND_RELEASE_OWNER_OPTIONS: readonly HeadlessStylingTailwindReleaseOwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen', team: 'Design systems' },
  { id: 'mina', name: 'Mina Lee', team: 'Core UI' },
  { id: 'omar', name: 'Omar Aziz', team: 'Compliance', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation' },
]);

interface HeadlessExamplesTailwindLaunchMarketOption {
  readonly code: string;
  readonly label: string;
  readonly region: string;
}

const HEADLESS_EXAMPLES_TAILWIND_LAUNCH_MARKET_OPTIONS: readonly HeadlessExamplesTailwindLaunchMarketOption[] = Object.freeze([
  { code: 'ca', label: 'Canada', region: 'North America' },
  { code: 'de', label: 'Germany', region: 'Europe' },
  { code: 'id', label: 'Indonesia', region: 'Asia Pacific' },
  { code: 'in', label: 'India', region: 'Asia Pacific' },
  { code: 'jp', label: 'Japan', region: 'Asia Pacific' },
  { code: 'mx', label: 'Mexico', region: 'North America' },
  { code: 'es', label: 'Spain', region: 'Europe' },
]);

@Component({
  selector: 'app-multi-autocomplete',
  imports: [
    TngMultiAutocomplete,
    TngMultiAutocompleteTrigger,
    TngMultiAutocompleteChip,
    TngMultiAutocompleteContent,
    TngMultiAutocompleteOverlay,
    TngMultiAutocompleteListbox,
    TngMultiAutocompleteOption,
  ],
  templateUrl: './multi-autocomplete.component.html',
})
export class MultiAutocompleteComponent {
  readonly headlessOverviewTailwindLaunchMarkets = HEADLESS_OVERVIEW_TAILWIND_LAUNCH_MARKET_OPTIONS;
  readonly headlessOverviewTailwindLaunchMarketsOpen = signal(false);
  readonly headlessOverviewTailwindLaunchMarketsQuery = signal('');
  readonly headlessOverviewTailwindSelectedMarketCodes = signal<readonly string[]>(['ca', 'es']);

  readonly headlessOverviewTailwindFilteredLaunchMarkets = computed(() => {
    const normalizedQuery = this.headlessOverviewTailwindLaunchMarketsQuery().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.headlessOverviewTailwindLaunchMarkets;
    }

    return this.headlessOverviewTailwindLaunchMarkets.filter((market) =>
      (market.label + ' ' + market.region).toLowerCase().includes(normalizedQuery),
    );
  });

  readonly headlessOverviewTailwindSelectedMarketSummary = computed(() => {
    if (this.headlessOverviewTailwindSelectedMarketCodes().length === 0) {
      return 'none';
    }

    return this.headlessOverviewTailwindSelectedMarketCodes()
      .map((code) => this.headlessOverviewTailwindLaunchMarkets.find((market) => market.code === code)?.label ?? code)
      .join(', ');
  });

  onHeadlessOverviewTailwindLaunchMarketsInput(event: Event): void {
    this.headlessOverviewTailwindLaunchMarketsQuery.set((event.target as HTMLInputElement).value);
  }

  onHeadlessOverviewTailwindLaunchMarketsValueChange(value: unknown): void {
    this.headlessOverviewTailwindSelectedMarketCodes.set(this.toHeadlessOverviewTailwindValueArray(value));
  }

  resolveHeadlessOverviewTailwindLaunchMarketLabel(code: string): string {
    return this.headlessOverviewTailwindLaunchMarkets.find((market) => market.code === code)?.label ?? code;
  }

  private toHeadlessOverviewTailwindValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .map((item) => (typeof item === 'string' ? item : String(item)))
      .filter((item) => item.length > 0);
  }


  readonly headlessStylingPlainReleaseOwners = HEADLESS_STYLING_TAILWIND_RELEASE_OWNER_OPTIONS;
  readonly headlessStylingPlainReleaseOwnersOpen = signal(false);
  readonly headlessStylingPlainReleaseOwnerQuery = signal('');
  readonly headlessStylingPlainSelectedOwnerIds = signal<readonly string[]>(['mina']);

  readonly headlessStylingPlainFilteredReleaseOwners = computed(() => {
    const normalizedQuery = this.headlessStylingPlainReleaseOwnerQuery().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.headlessStylingPlainReleaseOwners;
    }

    return this.headlessStylingPlainReleaseOwners.filter((owner) =>
      (owner.name + ' ' + owner.team).toLowerCase().includes(normalizedQuery),
    );
  });

  onHeadlessStylingPlainReleaseOwnerInput(event: Event): void {
    this.headlessStylingPlainReleaseOwnerQuery.set((event.target as HTMLInputElement).value);
  }

  onHeadlessStylingPlainReleaseOwnerValueChange(value: unknown): void {
    this.headlessStylingPlainSelectedOwnerIds.set(this.toHeadlessStylingPlainValueArray(value));
  }

  resolveHeadlessStylingPlainReleaseOwnerLabel(id: string): string {
    return this.headlessStylingPlainReleaseOwners.find((owner) => owner.id === id)?.name ?? id;
  }

  isHeadlessStylingPlainReleaseOwnerDisabled(owner: HeadlessStylingTailwindReleaseOwnerOption): boolean {
    return owner.disabled === true;
  }

  private toHeadlessStylingPlainValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .map((item) => (typeof item === 'string' ? item : String(item)))
      .filter((item) => item.length > 0);
  }

  readonly headlessExamplesTailwindLaunchMarkets = HEADLESS_EXAMPLES_TAILWIND_LAUNCH_MARKET_OPTIONS;
  readonly headlessExamplesTailwindLaunchMarketsOpen = signal(false);
  readonly headlessExamplesTailwindLaunchMarketsQuery = signal('');
  readonly headlessExamplesTailwindSelectedMarketCodes = signal<readonly string[]>(['in', 'jp']);

  readonly headlessExamplesTailwindFilteredLaunchMarkets = computed(() => {
    const normalizedQuery = this.headlessExamplesTailwindLaunchMarketsQuery().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.headlessExamplesTailwindLaunchMarkets;
    }

    return this.headlessExamplesTailwindLaunchMarkets.filter((market) =>
      (market.label + ' ' + market.region).toLowerCase().includes(normalizedQuery),
    );
  });

  readonly headlessExamplesTailwindSelectedMarketSummary = computed(() => {
    if (this.headlessExamplesTailwindSelectedMarketCodes().length === 0) {
      return 'none';
    }

    return this.headlessExamplesTailwindSelectedMarketCodes()
      .map((code) => this.headlessExamplesTailwindLaunchMarkets.find((market) => market.code === code)?.label ?? code)
      .join(', ');
  });

  onHeadlessExamplesTailwindLaunchMarketsInput(event: Event): void {
    this.headlessExamplesTailwindLaunchMarketsQuery.set((event.target as HTMLInputElement).value);
  }

  onHeadlessExamplesTailwindLaunchMarketsValueChange(value: unknown): void {
    this.headlessExamplesTailwindSelectedMarketCodes.set(this.toHeadlessExamplesTailwindValueArray(value));
  }

  resolveHeadlessExamplesTailwindLaunchMarketLabel(code: string): string {
    return this.headlessExamplesTailwindLaunchMarkets.find((market) => market.code === code)?.label ?? code;
  }

  private toHeadlessExamplesTailwindValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value.map((item) => (typeof item === 'string' ? item : String(item))).filter(Boolean);
  }
}