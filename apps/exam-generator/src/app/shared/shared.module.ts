import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./spinner.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent, TranslateModule],
})
export class SharedModule {}
