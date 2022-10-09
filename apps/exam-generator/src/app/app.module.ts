import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ShellModule } from "./shell/shell.module";
import { TaskListModule } from "./task-list/task-list.module";
import { SharedModule } from "./shared/shared.module";
import { AboutModule } from "./about/about.module";
import { TaskEditModule } from "./task-edit/task-edit.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";
import { WelcomeModule } from "./welcome/welcome.module";
import { RippleModule } from "primeng/ripple";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";

let resolvePersistenceEnabled: (enabled: boolean) => void;

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
    NgbModule,
    RippleModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
