import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CardComponent } from 'src/app/components/card/card/card.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FilterPanelModule } from 'src/app/components/filter-panel/filter-panel.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':id',
    component: CatDetailComponent,
  },
];

@NgModule({
  declarations: [MainComponent, CardComponent, CatDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FilterPanelModule,
    ShareButtonsModule,
    ShareIconsModule,
    RouterModule.forChild(routes),
  ],
})
export class MainModuleModule {}
