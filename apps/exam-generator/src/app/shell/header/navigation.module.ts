import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { RouterModule } from "@angular/router";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, AvatarModule, ButtonModule],
  exports: [HeaderComponent]
})
export class NavigationModule {}
