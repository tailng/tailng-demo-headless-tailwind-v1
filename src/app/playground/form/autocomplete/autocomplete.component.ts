import { Component, computed, signal } from '@angular/core';
import {
  TngAutocomplete,
  TngAutocompleteContent,
  TngAutocompleteIcon,
  TngAutocompleteListbox,
  TngAutocompleteOption,
  TngAutocompleteOverlay,
  TngAutocompleteTrigger,
  TngAutocompleteTriggerContainer,
} from '@tailng-ui/primitives';

interface CountryOption {
  readonly code: string;
  readonly label: string;
}

const COUNTRY_OPTIONS: readonly CountryOption[] = Object.freeze([
  { code: 'ca', label: 'Canada' },
  { code: 'de', label: 'Germany' },
  { code: 'id', label: 'Indonesia' },
  { code: 'in', label: 'India' },
  { code: 'jp', label: 'Japan' },
  { code: 'mx', label: 'Mexico' },
  { code: 'es', label: 'Spain' },
]);
interface ReleaseOwnerAutocompleteOption {
  readonly id: string;
  readonly label: string;
}

const RELEASE_OWNER_AUTOCOMPLETE_OPTIONS: readonly ReleaseOwnerAutocompleteOption[] = Object.freeze([
  { id: 'abigail', label: 'Abigail Chen' },
  { id: 'kiran', label: 'Kiran Rao' },
  { id: 'lucy', label: 'Lucy Martin' },
  { id: 'mina', label: 'Mina Lee' },
  { id: 'omar', label: 'Omar Aziz' },
]);

interface RepositoryCreateTailwindOption {
  readonly id: string;
  readonly label: string;
}

const REPOSITORY_CREATE_TAILWIND_OPTIONS: readonly RepositoryCreateTailwindOption[] = Object.freeze([
  { id: 'tailng-ui', label: 'tailng-ui' },
  { id: 'tailng-docs', label: 'tailng-docs' },
  { id: 'angular-components', label: 'angular/components' },
  { id: 'storybook', label: 'storybook' },
  { id: 'nx-workspace', label: 'nx-workspace' },
]);

@Component({
  selector: 'app-autocomplete',
  
  imports: [
    TngAutocomplete,
    TngAutocompleteTrigger,
    TngAutocompleteTriggerContainer,
    TngAutocompleteIcon,
    TngAutocompleteContent,
    TngAutocompleteOverlay,
    TngAutocompleteListbox,
    TngAutocompleteOption,
  ],
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent {
  readonly countries = COUNTRY_OPTIONS;
  readonly open = signal(false);
  readonly selectedCountry = signal<string | null>('id');
  readonly query = signal('');

  readonly filteredCountries = computed(() => {
    const normalizedQuery = this.query().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.countries;
    }

    return this.countries.filter((country) =>
      country.label.toLowerCase().includes(normalizedQuery),
    );
  });

  readonly selectedLabel = computed(
    () => this.countries.find((country) => country.code === this.selectedCountry())?.label ?? 'none',
  );

  readonly displayText = computed(() => {
    if (this.open()) {
      return this.query();
    }

    return this.selectedLabel() === 'none' ? '' : this.selectedLabel();
  });

  onInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  readonly releaseOwnerAutocompleteOptions = RELEASE_OWNER_AUTOCOMPLETE_OPTIONS;
  readonly releaseOwnerAutocompleteOpen = signal(false);
  readonly releaseOwnerAutocompleteValue = signal<string | null>('mina');
  readonly releaseOwnerAutocompleteQuery = signal('');

  readonly releaseOwnerAutocompleteFilteredOptions = computed(() => {
    const normalizedQuery = this.releaseOwnerAutocompleteQuery().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.releaseOwnerAutocompleteOptions;
    }

    return this.releaseOwnerAutocompleteOptions.filter((person) =>
      person.label.toLowerCase().includes(normalizedQuery),
    );
  });

  readonly releaseOwnerAutocompleteSelectedLabel = computed(
    () =>
      this.releaseOwnerAutocompleteOptions.find(
        (person) => person.id === this.releaseOwnerAutocompleteValue(),
      )?.label ?? 'none',
  );

  readonly releaseOwnerAutocompleteDisplayText = computed(() =>
    this.releaseOwnerAutocompleteOpen()
      ? this.releaseOwnerAutocompleteQuery()
      : (
          this.releaseOwnerAutocompleteSelectedLabel() === 'none'
            ? ''
            : this.releaseOwnerAutocompleteSelectedLabel()
        ),
  );

  onReleaseOwnerAutocompleteInput(event: Event): void {
    this.releaseOwnerAutocompleteQuery.set((event.target as HTMLInputElement).value);
  }

  readonly repositoryCreateTailwindOptions = signal<readonly RepositoryCreateTailwindOption[]>(
    REPOSITORY_CREATE_TAILWIND_OPTIONS,
  );
  readonly repositoryCreateTailwindOpen = signal(false);
  readonly repositoryCreateTailwindValue = signal<string | null>('tailng-docs');
  readonly repositoryCreateTailwindQuery = signal('');

  readonly repositoryCreateTailwindFilteredOptions = computed(() => {
    const normalizedQuery = this.repositoryCreateTailwindQuery().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.repositoryCreateTailwindOptions();
    }

    return this.repositoryCreateTailwindOptions().filter((repository) =>
      repository.label.toLowerCase().includes(normalizedQuery),
    );
  });

  readonly repositoryCreateTailwindSelectedLabel = computed(
    () =>
      this.repositoryCreateTailwindOptions().find(
        (repository) => repository.id === this.repositoryCreateTailwindValue(),
      )?.label ?? 'none',
  );

  readonly repositoryCreateTailwindDisplayText = computed(() => {
    if (this.repositoryCreateTailwindOpen()) {
      return this.repositoryCreateTailwindQuery();
    }

    return this.repositoryCreateTailwindSelectedLabel() === 'none'
      ? ''
      : this.repositoryCreateTailwindSelectedLabel();
  });

  onRepositoryCreateTailwindInput(event: Event): void {
    this.repositoryCreateTailwindQuery.set((event.target as HTMLInputElement).value);
  }

  onRepositoryCreateTailwind(query: string): void {
    const trimmed = query.trim();
    if (trimmed === '') {
      return;
    }

    const id = trimmed.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (id === '') {
      return;
    }

    const existing = this.repositoryCreateTailwindOptions().find((repository) => repository.id === id);
    if (existing) {
      this.repositoryCreateTailwindValue.set(existing.id);
      this.repositoryCreateTailwindOpen.set(false);
      this.repositoryCreateTailwindQuery.set('');
      return;
    }

    const nextRepository = { id, label: trimmed };
    this.repositoryCreateTailwindOptions.set([
      ...this.repositoryCreateTailwindOptions(),
      nextRepository,
    ]);
    this.repositoryCreateTailwindValue.set(nextRepository.id);
    this.repositoryCreateTailwindOpen.set(false);
    this.repositoryCreateTailwindQuery.set('');
  }
}
