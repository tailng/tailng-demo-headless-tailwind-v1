import { Component, signal } from '@angular/core';
import {
  TngMenu,
  TngMenuGroupLabel,
  TngMenuItem,
  TngMenuSelectEvent,
  TngMenuSeparator,
  TngMenuTrigger,
} from '@tailng-ui/primitives';

@Component({
  selector: 'app-menu',
  imports: [TngMenu, TngMenuGroupLabel, TngMenuItem, TngMenuSeparator, TngMenuTrigger],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  protected readonly overviewTailwindLastCommand = signal('No command yet');

  protected onOverviewTailwindCommandSelect(event: TngMenuSelectEvent): void {
    this.overviewTailwindLastCommand.set(String(event.value));
  }

  protected readonly dropdownTailwindLastAction = signal('No action yet');

  protected onDropdownTailwindActionSelect(event: TngMenuSelectEvent): void {
    this.dropdownTailwindLastAction.set(String(event.value));
  }

  protected readonly nestedTailwindLastCommand = signal('No command yet');

  protected onNestedTailwindCommandSelect(event: TngMenuSelectEvent): void {
    this.nestedTailwindLastCommand.set(String(event.value));
  }
}
