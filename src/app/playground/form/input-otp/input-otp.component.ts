import { Component, computed, signal } from '@angular/core';
import {
  resolveTngOtpState,
  TngInputOtp as TngInputOtpPrimitive,
  TngInputOtpSlot,
} from '@tailng-ui/primitives';

@Component({
  selector: 'app-input-otp',
  imports: [TngInputOtpPrimitive, TngInputOtpSlot],
  templateUrl: './input-otp.component.html',
})
export class InputOtpComponent {
  readonly headlessInputOtpOverviewTailwindLength = 6;
  readonly headlessInputOtpOverviewTailwindSlotIndexes = Array.from(
    { length: this.headlessInputOtpOverviewTailwindLength },
    (_, index) => index,
  );
  readonly headlessInputOtpOverviewTailwindValue = signal('40');
  readonly headlessInputOtpOverviewTailwindActiveIndex = signal<number | null>(2);
  readonly headlessInputOtpOverviewTailwindState = computed(() =>
    resolveTngOtpState(
      this.headlessInputOtpOverviewTailwindLength,
      this.headlessInputOtpOverviewTailwindValue(),
    ),
  );
  readonly headlessInputOtpExamplesSmsTailwindLength = 6;
  readonly headlessInputOtpExamplesSmsTailwindSlotIndexes = Array.from(
    { length: this.headlessInputOtpExamplesSmsTailwindLength },
    (_, index) => index,
  );
  readonly headlessInputOtpExamplesSmsTailwindValue = signal('73');
  readonly headlessInputOtpExamplesSmsTailwindActiveIndex = signal<number | null>(2);
  readonly headlessInputOtpExamplesSmsTailwindState = computed(() =>
    resolveTngOtpState(
      this.headlessInputOtpExamplesSmsTailwindLength,
      this.headlessInputOtpExamplesSmsTailwindValue(),
    ),
  );
}