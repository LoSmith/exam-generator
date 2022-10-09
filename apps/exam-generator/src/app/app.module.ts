import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { RippleModule } from "primeng/ripple";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ShellModule } from "./shell/shell.module";
import { SharedModule } from "./shared/shared.module";
import { AboutModule } from "./about/about.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";
import { WelcomeModule } from "./welcome/welcome.module";

import { environment } from "../environments/environment";
import { TaskModule } from "./task/task.module";

let resolvePersistenceEnabled: (enabled: boolean) => void;

@NgModule({
  declarations: [AppComponent],
  imports: [
    WelcomeModule,
    ShellModule,
    TaskModule,
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
