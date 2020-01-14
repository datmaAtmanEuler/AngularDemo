import { Injectable } from "@angular/core";
import { Theme, orange, yellow, purple, light, dark } from "./theme";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [orange, yellow, purple, light, dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  isOrangeTheme(): boolean {
    return this.active.name === orange.name;
  }

  setOrangeTheme(): void {
    this.setActiveTheme(orange);
  }

  isYellowTheme(): boolean {
    return this.active.name === yellow.name;
  }

  setYellowTheme(): void {
    this.setActiveTheme(yellow);
  }

  isPurpleTheme(): boolean {
    return this.active.name === purple.name;
  }

  setPurpleTheme(): void {
    this.setActiveTheme(purple);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }

  switchThemeId(themeId: number) {
    let themeIndex: number = (themeId >= 0 && themeId < this.availableThemes.length) ? themeId : 0;
    this.setActiveTheme(this.availableThemes[themeIndex]);
  }
}