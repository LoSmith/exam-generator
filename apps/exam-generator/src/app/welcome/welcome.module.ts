import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WelcomeComponent } from "./welcome.component";
import { ButtonModule } from "primeng/button";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, ButtonModule, SharedModule],
})
export class WelcomeModule {}
