import { Component } from "@angular/core";

import packageJson from "../../../../package.json";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  public appVersion = `v${packageJson.version}`;
}
