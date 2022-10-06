import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./shell/shell.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { TaskEditComponent } from "./task-edit/task-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";

export const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "tasks",
        component: TaskListComponent,
      },
      {
        path: "tasks/:id/edit",
        component: TaskEditComponent,
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "welcome",
        component: WelcomeComponent,
      },
      {
        path: "page-not-found",
        component: PageNotFoundComponent,
      },
      {
        path: "**",
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
