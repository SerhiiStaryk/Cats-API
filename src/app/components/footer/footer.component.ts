import { Component } from '@angular/core';
import * as constants from '../../shared/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public version: string = constants.BUILD_VERSION;

  public get year(): number {
    return new Date().getFullYear();
  }
}
