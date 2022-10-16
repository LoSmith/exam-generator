import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
