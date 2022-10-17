import { Component } from "@angular/core";

import packageJson from "../../../../package.json";
import { TranslateService } from "@ngx-translate/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  public appVersion = `v${packageJson.version}`;
  // fuck it ... no dynamic loading of all i18n files
  allAvailableLanugaes: MenuItem[] = [
    { label: "English", command: () => this.switchLanguage('en')},
    { label: "Deutsch", command: () => this.switchLanguage('de')}
  ];

  get currentLanguage() {
    return this.translationService.currentLang;
  }

  constructor(private translationService: TranslateService) {
  }

  switchLanguage(language: string) {
    this.translationService.use(language)
  }
}
