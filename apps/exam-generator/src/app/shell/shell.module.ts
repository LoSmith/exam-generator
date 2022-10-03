import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellComponent } from "./shell.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { SidebarModule } from "./sidebar/sidebar.module";
import { NavigationModule } from "./header/navigation.module";
import { AppModule } from "../app.module";
import { SpinnerComponent } from "../shared/spinner.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ShellComponent],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NavigationModule,
    SidebarModule,
    AppRoutingModule,
  ],
  exports: [ShellComponent],
})
export class ShellModule {}
