import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResponsiveService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  private isMatches(breakpoint: string): Observable<boolean> {
    return this.breakpointObserver.observe([breakpoint]).pipe(
      map((state: BreakpointState) => {
        return state.matches;
      })
    );
  }

  public isXSmall$ = this.isMatches(Breakpoints.XSmall);
  public isSmall$ = this.isMatches(Breakpoints.Small);
  public isMedium$ = this.isMatches(Breakpoints.Medium);
  public isLarge$ = this.isMatches(Breakpoints.Large);
  public isXLarge$ = this.isMatches(Breakpoints.XLarge);
}
