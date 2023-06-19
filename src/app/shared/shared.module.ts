import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './modules/material.module';

import { MenuComponent } from '../components/menu/menu.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AngularMaterialModule,
  ],
  declarations: [MenuComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
