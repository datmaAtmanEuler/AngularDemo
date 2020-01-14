import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from './app.static';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppState } from './app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
  values: string[] = ['Tag 1', 'Tag 2', 'Tag 4'];

  specialPage: boolean;

  private specialPages: any[] = [
    '/pages/login',
    '/pages/register',
    '/pages/lock',
    '/pages/pricing',
    '/pages/single-post',
    '/pages/post-listing'
  ];

  private currentUrl = '';

  constructor(
    private router: Router,
    public translate: TranslateService,
    private appState: AppState,
    private location: Location
  ) {
        const languages = LANGUAGES.map(i => i.code);
        translate.addLangs(languages);
        translate.setDefaultLang(languages[0]);

        const browserLang = translate.getBrowserLang();
        const languageUse = languages.indexOf(browserLang) >= 0 ? browserLang : languages[0];
        translate.use(languageUse);
        this.appState.locale = LANGUAGES.filter(i => i.code === languageUse)[0];
    this.router.events.subscribe((route:any) => {
      this.currentUrl = route.url;

      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });

  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
