import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./shell/shell.component";
import { TaskListComponent } from "./task/task-list/task-list.component";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { TaskEditComponent } from "./task/task-edit/task-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ExamTaskNotFoundComponent } from "./task/exam-task-not-found/exam-task-not-found.component";

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
        path: "tasks/**/edit",
        component: ExamTaskNotFoundComponent,
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
        path: "**",
        component: PageNotFoundComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
