import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";

import { AboutComponent } from "./about.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, CardModule, SharedModule],
})
export class AboutModule {}
