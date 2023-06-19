import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ResponsiveService],
})
export class HeaderComponent implements OnInit {
  @Output() public openedSidenav = new EventEmitter();
  @Input() public isOpen: boolean = false;

  public isShowBurgerMenu: boolean = false;

  public isXSmall$: Observable<boolean> = this.responsiveService.isXSmall$;
  public isSmall$: Observable<boolean> = this.responsiveService.isSmall$;

  public subscription!: Subscription;

  constructor(private responsiveService: ResponsiveService) {}

  public ngOnInit(): void {
    this.subscription = combineLatest([this.isSmall$, this.isXSmall$])
      .pipe(untilDestroyed(this))
      .subscribe((data: boolean[]) => {
        this.isShowBurgerMenu = data?.some((val: boolean) => val === true);
      });
  }

  public onOpenMenu(): void {
    this.openedSidenav.emit();
  }
}
