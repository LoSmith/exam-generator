import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "../app-routing.module";
import { SidebarModule } from "./sidebar/sidebar.module";
import { NavigationModule } from "./header/navigation.module";
import { ShellComponent } from "./shell.component";
import { SharedModule } from "../shared/shared.module";
import { RippleModule } from "primeng/ripple";

@NgModule({
  declarations: [ShellComponent],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NavigationModule,
    SidebarModule,
    AppRoutingModule,
    RippleModule,
  ],
  exports: [ShellComponent],
})
export class ShellModule {}
