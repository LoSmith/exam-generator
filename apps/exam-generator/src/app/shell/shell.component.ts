import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";

@Component({
  selector: "app-shell-layout",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"]
})
export class ShellComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === "/") {
      this.router.navigate([`/${environment.defaultLandingPage}`]);
    }
  }
}
