import { Component, computed, signal } from '@angular/core';
import {
  TngSelect,
  TngSelectContent,
  TngSelectIcon,
  TngSelectListbox,
  TngSelectOption,
  TngSelectOverlay,
  TngSelectTrigger,
  TngSelectValue,
} from '@tailng-ui/primitives';

interface HeadlessSelectboxOverviewTailwindWorkflowStageOption {
  readonly disabled?: boolean;
  readonly label: string;
  readonly note: string;
  readonly value: string;
}

type HeadlessSelectboxOverviewTailwindValue = string | readonly string[] | null;

const HEADLESS_SELECTBOX_OVERVIEW_TAILWIND_WORKFLOW_STAGE_OPTIONS: readonly HeadlessSelectboxOverviewTailwindWorkflowStageOption[] = Object.freeze([
  { value: 'draft', label: 'Draft', note: 'Internal drafting only.' },
  { value: 'review', label: 'In review', note: 'Waiting on editorial review.' },
  { value: 'qa', label: 'QA ready', note: 'Approved for validation.' },
  { value: 'live', label: 'Live', note: 'Already published.', disabled: true },
]);

interface HeadlessSelectboxExamplesOwnerTailwindReleaseOwnerOption {
  readonly disabled?: boolean;
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly timezone: string;
}

type HeadlessSelectboxExamplesOwnerTailwindValue = string | readonly string[] | null;

const HEADLESS_SELECTBOX_EXAMPLES_OWNER_TAILWIND_RELEASE_OWNER_OPTIONS: readonly HeadlessSelectboxExamplesOwnerTailwindReleaseOwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen', team: 'Design systems', timezone: 'UTC-8' },
  { id: 'mina', name: 'Mina Lee', team: 'Core UI', timezone: 'UTC-5' },
  { id: 'omar', name: 'Omar Aziz', team: 'Compliance', timezone: 'UTC+1', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation', timezone: 'UTC+5:30' },
]);

@Component({
  selector: 'app-select',
  imports: [
    TngSelect,
    TngSelectTrigger,
    TngSelectValue,
    TngSelectIcon,
    TngSelectContent,
    TngSelectOverlay,
    TngSelectListbox,
    TngSelectOption,
  ],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  readonly headlessSelectboxOverviewTailwindWorkflowStages =
    HEADLESS_SELECTBOX_OVERVIEW_TAILWIND_WORKFLOW_STAGE_OPTIONS;
  readonly headlessSelectboxOverviewTailwindSelectedStage = signal<string | null>('qa');
  readonly headlessSelectboxOverviewTailwindSelectedStageLabel = computed(() => {
    const selectedValue = this.headlessSelectboxOverviewTailwindSelectedStage();
    if (selectedValue === null) {
      return null;
    }

    return (
      this.headlessSelectboxOverviewTailwindWorkflowStages.find(
        (stage) => stage.value === selectedValue,
      )?.label ?? null
    );
  });
  readonly headlessSelectboxOverviewTailwindSelectedStageSummary = computed(() =>
    this.headlessSelectboxOverviewTailwindSelectedStageLabel() ?? 'none',
  );

  onHeadlessSelectboxOverviewTailwindSelectedStageChange(
    value: HeadlessSelectboxOverviewTailwindValue,
  ): void {
    this.headlessSelectboxOverviewTailwindSelectedStage.set(
      this.toHeadlessSelectboxOverviewTailwindSingleValue(value),
    );
  }

  private toHeadlessSelectboxOverviewTailwindSingleValue(
    value: HeadlessSelectboxOverviewTailwindValue,
  ): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }

  readonly headlessSelectboxExamplesOwnerTailwindReleaseOwners =
    HEADLESS_SELECTBOX_EXAMPLES_OWNER_TAILWIND_RELEASE_OWNER_OPTIONS;
  readonly headlessSelectboxExamplesOwnerTailwindSelectedOwnerId = signal<string | null>('abigail');
  readonly headlessSelectboxExamplesOwnerTailwindSelectedOwner = computed(() => {
    const selectedValue = this.headlessSelectboxExamplesOwnerTailwindSelectedOwnerId();
    if (selectedValue === null) {
      return null;
    }

    return (
      this.headlessSelectboxExamplesOwnerTailwindReleaseOwners.find(
        (owner) => owner.id === selectedValue,
      ) ?? null
    );
  });
  readonly headlessSelectboxExamplesOwnerTailwindSelectedOwnerSummary = computed(() =>
    this.headlessSelectboxExamplesOwnerTailwindSelectedOwner()?.name ?? 'none',
  );

  onHeadlessSelectboxExamplesOwnerTailwindSelectedOwnerChange(
    value: HeadlessSelectboxExamplesOwnerTailwindValue,
  ): void {
    this.headlessSelectboxExamplesOwnerTailwindSelectedOwnerId.set(
      this.toHeadlessSelectboxExamplesOwnerTailwindSingleValue(value),
    );
  }

  private toHeadlessSelectboxExamplesOwnerTailwindSingleValue(
    value: HeadlessSelectboxExamplesOwnerTailwindValue,
  ): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }
}
