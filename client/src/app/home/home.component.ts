import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription, distinctUntilChanged } from 'rxjs';

const STAR_ICON = `
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"/>
</svg>
`;

const COMPUTER_ICON = `
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
`;

export interface TileCard {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatGridListModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  columns: number = 2;

  tileCards: TileCard[] = [
    {
      title: 'Project',
      subtitle: 'Wordle',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imageAlt: 'Photo of a Shiba Inu',
    },
    {
      title: 'Project',
      subtitle: 'Wordle',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imageAlt: 'Photo of a Shiba Inu',
    },
  ];

  private breakpointSubscription: Subscription = new Subscription();

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium])
    .pipe(distinctUntilChanged());

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) {
    iconRegistry.addSvgIconLiteral(
      'star',
      sanitizer.bypassSecurityTrustHtml(STAR_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'computer',
      sanitizer.bypassSecurityTrustHtml(COMPUTER_ICON)
    );
  }

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.columns = 2;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.columns = 1;
    }
  }
}
