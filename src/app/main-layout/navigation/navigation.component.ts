import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LANGUAGES} from 'src/app/app.static';
import {AppState} from 'src/app/app-state.service';
import { ThemeService } from "src/app/views/theme/theme.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;
  themesList: any[] = [
     {
	color: '#ffa500',
	name: 'OrangeTheme',
	id: 0
     },
     {
	color: '#fc3',
	name: 'YellowTheme',
	id: 1
     },
     {
	color: '#c89ce4',
	name: 'PurpleTheme',
	id: 2
     },
     {
	color: '#5C7D99',
	name: 'DarkBlueTheme',
	id: 3
     },
     {
	color: '#08090A',
	name: 'DarkTheme',
	id: 4
     }
  ];
  selectedLanguage: any;
  selectedTheme: any;
  tempTheme: any = null;
  clicked: boolean;

  constructor(public translate: TranslateService,
        private appState: AppState, private themeService: ThemeService) {
	this.selectedLanguage = this.appState.locale || null;
        this.translate.onLangChange.subscribe(
            () => {
                this.selectedLanguage = this.appState.locale;
            }
        );
    	this.clicked = this.clicked === undefined ? false : true;
  }

    ngOnInit() {
	this.selectedTheme = this.themesList[3];
	this.themeService.switchThemeId(this.selectedTheme.id);
    }

    get languages() {
        return LANGUAGES;
    }

    setClicked(val: boolean): void {
    	this.clicked = val;
    }
    updateLanguage(language: any) {
        this.appState.locale = language;
        this.translate.use(language.code);
        this.selectedLanguage = this.appState.locale;
    }

    toggleTheme(themeId: number) {
	this.selectedTheme = this.themesList[themeId];
    	this.themeService.switchThemeId(themeId);
    }
    
    mouseOverThemeSetting(themeId: number) {
	this.themeService.switchThemeId(themeId);
    }
    
    mouseOutThemeSetting() {
	this.themeService.switchThemeId(this.selectedTheme.id);
    }
}
