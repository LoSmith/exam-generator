import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { routes, AppRoutingModule } from "./app-routing.module";
import { SpinnerComponent } from "./shared/spinner.component";
import { ShellModule } from "./shell/shell.module";
import { TaskListModule } from "./task-list/task-list.module";
import { SharedModule } from "./shared/shared.module";
import { AboutModule } from "./about/about.module";
import { TaskEditModule } from "./task-edit/task-edit.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";
import { WelcomeModule } from "./welcome/welcome.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    WelcomeModule,
    ShellModule,
    TaskListModule,
    TaskEditModule,
    AboutModule,
    SharedModule,
    PageNotFoundModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
