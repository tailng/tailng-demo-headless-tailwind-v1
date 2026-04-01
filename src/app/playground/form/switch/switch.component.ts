import { Component, signal } from '@angular/core';
import { TngSwitch } from '@tailng-ui/primitives';
@Component({
  selector: 'app-switch',
  standalone: true,
  templateUrl: './switch.component.html',
  imports: [TngSwitch],
})
export class SwitchComponent {

  readonly autoPublish = signal(false);

  onAutoPublishToggle(): void {
    this.autoPublish.update((value) => !value);
  }
}

