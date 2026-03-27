import { Component } from '@angular/core';
import { TngInput, TngInputGroup, TngPrefix, TngSuffix } from '@tailng-ui/primitives';
import { TngIcon } from '@tailng-ui/icons';

@Component({
  selector: 'app-input-demo',
  standalone: true,
  templateUrl: './input-demo.component.html',
  imports: [TngInput, TngInputGroup, TngPrefix, TngSuffix, TngIcon],
})
export class InputDemoComponent {}
