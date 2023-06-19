import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterPanelComponent } from './filter-panel.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { AngularMaterialModule } from 'src/app/shared/modules/material.module';
import { SliderComponent } from './slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  declarations: [FilterPanelComponent, SearchInputComponent, SliderComponent],
  exports: [FilterPanelComponent],
})
export class FilterPanelModule {}
