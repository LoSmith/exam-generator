import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ButtonModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule {}
