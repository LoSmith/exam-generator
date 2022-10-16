import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PrimeNGConfig } from "primeng/api";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private primengConfig: PrimeNGConfig,
    private translationService: TranslateService
  ) {
    this.translationService.setDefaultLang("de");
    this.translationService.use("de");
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
