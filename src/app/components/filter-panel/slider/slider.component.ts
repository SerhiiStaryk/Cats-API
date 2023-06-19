import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  SLIDER_SETTING_DEFAULT_VALUE,
  SLIDER_SETTING_MAX,
  SLIDER_SETTING_MIN,
  SLIDER_SETTING_STEP,
} from 'src/app/shared/constants';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Output() countEvent = new EventEmitter<number>();
  public settings = {
    max: SLIDER_SETTING_MAX,
    min: SLIDER_SETTING_MIN,
    step: SLIDER_SETTING_STEP,
    thumbLabel: true,
  };
  public sliderControl = new FormControl(SLIDER_SETTING_DEFAULT_VALUE);

  ngOnInit(): void {
    this.sliderControl.valueChanges.subscribe((value) => {
      if (value) {
        this.countEvent.emit(value);
      }
    });
  }
}
