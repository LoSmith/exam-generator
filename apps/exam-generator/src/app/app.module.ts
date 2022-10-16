import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { RippleModule } from "primeng/ripple";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ShellModule } from "./shell/shell.module";
import { SharedModule } from "./shared/shared.module";
import { AboutModule } from "./about/about.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";
import { WelcomeModule } from "./welcome/welcome.module";

import { environment } from "../environments/environment";
import { TaskModule } from "./task/task.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
