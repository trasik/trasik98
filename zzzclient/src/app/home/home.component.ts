import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

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

const GITHUB_ICON = `
<svg height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6 c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1 c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2 C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2 c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z"></path> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M244.2,423.4c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2 c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8 c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3 c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6 c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5C243,374.6,247.3,398.2,244.2,423.4z"></path> </g> </g></svg>`;

const LINKEDIN_ICON = `
<?xml version="1.0" encoding="utf-8"?>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="-143 145 512 512" xml:space="preserve">
<path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
	c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
	c35.5,0,63.3,23,63.3,72.4V508.1z"/>
</svg>
`;

const X_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><rect width="512" height="509.64" rx="115.61" ry="115.61"/><path fill="#fff" fill-rule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/></svg>
`;

const SPOTIFY_ICON = `
<svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Spotify-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -460.000000)" fill="#00DA5A"> <path d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460" id="Spotify"> </path> </g> </g> </g></svg>
`;

const spotifySongs: String[] = [
  'Lose Yourself - Eminem',
  'Dandelions - Ruth B',
  'Lucid Dream - Topic',
];

export interface TileCard {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatGridListModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadein', [
      transition('void => *', [style({ opacity: 0 }), animate(800)]),
    ]),
    trigger('flyin-vertical', [
      transition('void => *', [
        style({ transform: 'translateY(-10%)' }),
        animate(800, style({ transform: 'translateY(0%)' })),
      ]),
    ]),
    trigger('stagger-cards', [
      transition('void => *', [
        query(
          '.main-content-tile',
          style({ opacity: 0, transform: 'translateX(-40px)' })
        ),
        query(
          '.main-content-tile',
          stagger('200ms', [
            animate(
              '300ms 300ms ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  columns: number = window.innerWidth >= 992 ? 7 : 1;

  currentSpotifySong =
    spotifySongs[Math.floor(Math.random() * spotifySongs.length)];

  tileCards: TileCard[] = [
    {
      title: 'Project',
      subtitle: 'Wordle',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imageAlt: 'Photo of a Shiba Inu',
      cols: 3,
      rows: 4,
    },
    {
      title: 'Project',
      subtitle: 'Wordle',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imageAlt: 'Photo of a Shiba Inu',
      cols: 4,
      rows: 4,
    },
    {
      title: 'Project',
      subtitle: 'Wordle',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imageAlt: 'Photo of a Shiba Inu',
      cols: 4,
      rows: 4,
    },
    {
      title: 'Project',
      subtitle: 'Wordle',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imageAlt: 'Photo of a Shiba Inu',
      cols: 3,
      rows: 4,
    },
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      'star',
      sanitizer.bypassSecurityTrustHtml(STAR_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'computer',
      sanitizer.bypassSecurityTrustHtml(COMPUTER_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'github',
      sanitizer.bypassSecurityTrustHtml(GITHUB_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'linkedin',
      sanitizer.bypassSecurityTrustHtml(LINKEDIN_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'x',
      sanitizer.bypassSecurityTrustHtml(X_ICON)
    );

    iconRegistry.addSvgIconLiteral(
      'spotify',
      sanitizer.bypassSecurityTrustHtml(SPOTIFY_ICON)
    );

    console.log(this.currentSpotifySong);
  }

  @HostListener('window:resize', []) updateColumns() {
    if (window.innerWidth >= 992) {
      this.columns = 7;
    } else {
      this.columns = 1;
    }
  }
}
