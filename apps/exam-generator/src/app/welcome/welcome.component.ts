import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent {
  currentLanguage: string;
  constructor(private translateService: TranslateService) {
    this.currentLanguage = this.translateService.currentLang;
  }
}
