import { Component, type OnDestroy } from '@angular/core';
import { TngIcon } from '@tailng-ui/icons';
import {
  bindTngDatepicker,
  createDatepickerController,
  TngDatepickerDayCell,
  TngDatepickerDayGrid,
  TngDatepickerHost,
  TngDatepickerInput,
  TngDatepickerMonthGrid,
  TngDatepickerMonthOption,
  TngDatepickerNextButton,
  TngDatepickerOverlay,
  TngDatepickerPeriodButton,
  TngDatepickerPrevButton,
  TngDatepickerTrigger,
  TngDatepickerYearOption,
  TngDatepickerYearGrid,
} from '@tailng-ui/primitives';

@Component({
  selector: 'app-datepicker',
  imports: [
    TngIcon,
    TngDatepickerHost,
    TngDatepickerOverlay,
    TngDatepickerInput,
    TngDatepickerTrigger,
    TngDatepickerPrevButton,
    TngDatepickerPeriodButton,
    TngDatepickerNextButton,
    TngDatepickerDayGrid,
    TngDatepickerDayCell,
    TngDatepickerMonthGrid,
    TngDatepickerMonthOption,
    TngDatepickerYearGrid,
    TngDatepickerYearOption,
  ],
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent {
  protected readonly controller = createDatepickerController<Date>({
    value: '2024-04-22',
    today: '2024-04-18',
    minDate: '2024-04-01',
    maxDate: '2026-03-31',
    closeOnSelect: true,
    trapFocus: true,
    showOutsideDays: true,
  });

  protected readonly datepicker = bindTngDatepicker(this.controller);

  protected readonly bookingWindowTailwindController = createDatepickerController<Date>({
    ownerDocument: document,
    value: '2024-05-18',
    today: '2024-05-18',
    minDate: '2024-05-10',
    maxDate: '2024-05-25',
    closeOnSelect: true,
    trapFocus: true,
    showOutsideDays: true,
  });

  protected readonly bookingWindowTailwindDatepicker = bindTngDatepicker(this.bookingWindowTailwindController);

  public ngOnDestroy(): void {
    this.controller.destroy();
    this.bookingWindowTailwindController.destroy();
  }
}
