import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";

import { AboutComponent } from "./about.component";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, CardModule],
})
export class AboutModule {}
