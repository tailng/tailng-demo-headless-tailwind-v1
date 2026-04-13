import { Component, signal } from '@angular/core';
import {
  TngMenu,
  TngMenuGroupLabel,
  TngMenuItem,
  TngMenuSelectEvent,
  TngMenubar,
  TngMenubarItem
} from '@tailng-ui/primitives';

@Component({
  selector: 'app-menubar',
  imports: [TngMenu, TngMenuGroupLabel, TngMenuItem, TngMenubar, TngMenubarItem],
  templateUrl: './menubar.component.html',
})
export class MenubarComponent {
  protected readonly overviewTailwindLastCommand = signal('No command yet');

  protected onOverviewTailwindCommandSelect(event: TngMenuSelectEvent): void {
    this.overviewTailwindLastCommand.set(String(event.value));
  }

  protected onOverviewTailwindLeafCommandSelect(value: string): void {
    this.overviewTailwindLastCommand.set(value);
  }

  protected readonly workspaceTailwindLastCommand = signal('No command yet');

  protected onWorkspaceTailwindCommandSelect(event: TngMenuSelectEvent): void {
    this.workspaceTailwindLastCommand.set(String(event.value));
  }

  protected onWorkspaceTailwindLeafCommandSelect(value: string): void {
    this.workspaceTailwindLastCommand.set(value);
  }

  protected readonly cascadeTailwindLastCommand = signal('No cascaded command yet');

  protected onCascadeTailwindCommandSelect(event: TngMenuSelectEvent): void {
    this.cascadeTailwindLastCommand.set(String(event.value));
  }
}
